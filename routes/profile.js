// Getting our favour data
var data = require('../data.json');
var user = require('../user.json');


exports.view = function( req, res ) { 

	// Count up all stats and find the favour that you requested
	var completed = 0;
	var inDebt = 0;
	var userName = user.user.name;
	var birthday = user.user.birthday;
	var link = user.user.link;
	var about = user.user.about;
	var image = user.user.image;

	// Array for multiple requests
	var ownRequests = [];

	for( i = 0; i < data.favours.length; i++ )
	{

		// Different variables necessary
		var status = data.favours[i].status;
		if(status === "cancelled"){

			continue;
		}

		var currentTime = new Date();
		var jsonDate = data.favours[i].time;
			
		var year = jsonDate.slice(0,4);
		var month = jsonDate.slice(5,7);

		var day = jsonDate.slice(8,10);
		var time = jsonDate.slice(11,16);
		var hours=time.slice(0,2);
		var minutes=time.slice(3,5);

		var monthInt = parseInt(month)-1; //because javascript jan:0
		var favourTime = new Date(year, monthInt, day, hours, minutes, 0, 0);


		if(data.favours[i].from === userName && data.favours[i].status === "completed"){
			completed++;
		}

		if(data.favours[i].name === userName && data.favours[i].status === "completed"){
			inDebt++;
		}


		if(data.favours[i].name !== userName) 
		{
			continue; // Skip if by another user
		}

		console.log("CURR: "+currentTime);
		console.log("FAVOUR: "+favourTime);
		console.log(favourTime.getTime()+": favGet          " + currentTime.getTime()+": currGet");

		if( favourTime.getTime() < currentTime.getTime() ) 
		{
			if(data.favours[i].status==="inProgress"){ //old but someone is still doing it
				var newFavour = ownRequests.length; //new element at end

				ownRequests.push({ //push empty because it otherwise gives pointers
				name: "",
				date: "",
				time: "",
				location: "",
				subject: "",
				description: "",
				id: "",
				image: "",
				from: "",
				status: ""
			});

			ownRequests[newFavour].name=data.favours[i].name;
			ownRequests[newFavour].time="PAST DUE";
			ownRequests[newFavour].location=data.favours[i].location;
			ownRequests[newFavour].subject=data.favours[i].subject;
			ownRequests[newFavour].description=data.favours[i].description;
			ownRequests[newFavour].id=data.favours[i].id;
			ownRequests[newFavour].image=data.favours[i].image;
			ownRequests[newFavour].from=data.favours[i].from;
			ownRequests[newFavour].status=data.favours[i].status;
				continue;
				
			}
			
			else{
					data.favours[i].status = "expired";
					continue; // Don't add old requests
			}
		
		}

		if( status === "active" || status === "inProgress" )
		{ //only include the favours that you requested
			var newFavour = ownRequests.length; //new element at end
			ownRequests.push({
				name: "",
				date: "",
				time: "",
				location: "",
				subject: "",
				description: "",
				id: "",
				image: "",
				from: "",
				status: ""
			});

			ownRequests[newFavour].name=data.favours[i].name;
			ownRequests[newFavour].time= month+"/"+day+"/"+year+" Time: "+time;
			ownRequests[newFavour].location=data.favours[i].location;
			ownRequests[newFavour].subject=data.favours[i].subject;
			ownRequests[newFavour].description=data.favours[i].description;
			ownRequests[newFavour].id=data.favours[i].id;
			ownRequests[newFavour].image=data.favours[i].image;
			ownRequests[newFavour].from=data.favours[i].from;
			ownRequests[newFavour].status=data.favours[i].status;

			console.log("ownRequests date prof.js: "+ownRequests[ownRequests.length-1].time);

		}
	}

	var requestBool = false; 

	for(i=0;i<ownRequests.length;i++){
		if(ownRequests[i].status === "active"){
			requestBool = true; //did not find a requesting favour
		}
	}

	var level = 1;	//current level
	var levelUp = 5; //how many to complete to level up
	var progressBar = "";
	var progressVal = "0";
	
	level = 1 + Math.floor(completed/5);  //whole number
	levelUp = 5 - completed%5; //how many needed to get multiple of 5


	if(levelUp == 1){
 		progressVal = "80";
 		progressBar = "progress-bar-success";
	}

	if(levelUp == 2){
		progressVal = "60";
 		progressBar = "progress-bar-info";

	}

	if(levelUp == 3){
		progressVal = "40";
 		progressBar = "progress-bar-info";

	}

	if(levelUp == 4){
		progressVal = "20";
 		progressBar = "progress-bar-warning";

	}

	if(levelUp == 5){
		 progressVal = "5";
		 progressBar = "progress-bar-danger";

	}

	var totalFavours = inDebt + completed;
	var owedPercent = inDebt/totalFavours * 100;
	var completedPercent = completed/totalFavours * 100;
	var numRequested = ownRequests.length;
		
//define all the variables, not all will be displayed depending on requestBool
	
//console.log("user: "+ user.user.name);


	res.render('profile', {
		'userName': userName,
		'birthday': birthday,
		'link': link,
		'about': about,
		'image': image,
		'favours': ownRequests,
		'inDebt': inDebt,
		'completed': completed,
		'numRequested': numRequested,
		'requestBool': requestBool,
		'level': level,
		'levelUp': levelUp,
		'progressBar': progressBar,
		'progressVal': progressVal,
		'owedPercent': owedPercent,
		'completedPercent': completedPercent
	});
};
