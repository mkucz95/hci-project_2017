// Getting our favour data
var data = require('../data.json');
var user = require('../user.json');


exports.view = function( req, res ) { 

	// Count up all stats and find the favour that you requested
	var completed = 0;
	var inDebt = 0;
	var userName = user.user.name;

	// Array for multiple requests
	var ownRequests = [];

	for( i = 0; i < data.favours.length; i++ )
	{
		// Different variables necessary
		var date = data.favours[i].time;
		var dateObj = new Date();
		var currentTime = dateObj.toJSON();
		var status = data.favours[i].status;

		if(data.favours[i].from === userName && data.favours[i].status === "completed"){
			completed++;
		}

		if(data.favours[i].name === userName && data.favours[i].status === "completed"){
			inDebt++;
		}


		if( userName !== data.favours[i].name ) 
		{
			continue; // Skip if by another user
		}

		if( date < dateObj ) 
		{
			data.favours[i].status = "expired";
			continue; // Don't add old requests
		}

		if( status === "active" )
		{ //only include the favours that people can select
			ownRequests[ownRequests.length] = data.favours[i];
			
			dateObj = Date(data.favours[i].time);  //make date readable
			dateString = dateObj.toString();
			var date = dateString.slice(0, 21);

			ownRequests[ownRequests.length-1].time = date;
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
	

	res.render('profile', {
		'userName': userName,
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
