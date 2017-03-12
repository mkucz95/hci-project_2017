/*
 * GET home page.
 */

// Getting our favour data
var data = require('../data.json');
var user = require('../user.json');
//var requests = require('../requests.json');

exports.view = function( req, res ) {
	
	var timeSort = []; //create new empty array to store all non expired favours
	var userName = user.user.name; 


	for(i=0; i<data.favours.length; i++){
		var currentTime = new Date();
		var jsonDate = data.favours[i].time;
			
		var year = jsonDate.slice(0,4);
		var month = jsonDate.slice(5,7);
		var day = jsonDate.slice(8,10);
		var time = jsonDate.slice(11,16);
		var hours=time.slice(0,2);
		var minutes=time.slice(3,5);

		var favourTime = new Date(year, month, day, hours, minutes, 0, 0);


		var status = data.favours[i].status;

		if(userName === data.favours[i].name){
			continue; //skip this request if it is the person's who submited it
		}

		if(favourTime.getTime() < currentTime.getTime()){
			data.favours[i].status = "expired";
			continue; //dont add old requests
		}

		if(status === "active" ){ //only include the favours that people can select
			var newFavour = timeSort.length; //new element at end

			timeSort.push({
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

			timeSort[newFavour].name=data.favours[i].name;
			timeSort[newFavour].time=month+"/"+day+"/"+year+" Time: "+time;
			timeSort[newFavour].location=data.favours[i].location;
			timeSort[newFavour].subject=data.favours[i].subject;
			timeSort[newFavour].description=data.favours[i].description;
			timeSort[newFavour].id=data.favours[i].id;
			timeSort[newFavour].image=data.favours[i].image;
			timeSort[newFavour].from=data.favours[i].from;
			timeSort[newFavour].status=data.favours[i].status;

			//console.log(data.favours[i]);
		}

	}

	var ownRequest = false; //am I requesting something
	var otherRequest = false; //am I doing something for someone

      for(i=0; i<data.favours.length; i++){
      	if(data.favours[i].name === userName && data.favours[i].status === "inProgress"){
      		ownRequest=true;
      	}

      	if(data.favours[i].from === userName && data.favours[i].status === "inProgress"){
      		otherRequest=true;
      	}

      }


console.log("timesort length"+ timeSort.length);

	res.render('index', {
		'favours': timeSort,
		'ownRequest': ownRequest,
		'otherRequest': otherRequest
		});

/*res.render('index', { //ab testing
		'favours': data.favours,
		'ownRequest': ownRequest,
		'otherRequest': otherRequest
		}); */
}

//AB TEST

/*exports.viewTwo = function( req, res ) {
	
	var timeSort = []; //create new empty array to store all non expired favours
	var userName = user.user.name; 


	for(i=0; i<data.favours.length; i++){
		var jsonDate = data.favours[i].time;
		var dateObj = new Date();
		var currentTime = dateObj.toJSON();
		var status = data.favours[i].status;

		console.log(data.favours[i].image);

		if(userName === data.favours[i].name){
			continue; //skip this request if it is the person's who submited it
		}

		if(jsonDate < currentTime){
			data.favours[i].status = "expired";
			continue; //dont add old requests
		}

		if(status === "active" ){ //only include the favours that people can select
			timeSort[timeSort.length] = data.favours[i];
			

			var year = jsonDate.slice(0,4);
			var month = jsonDate.slice(5,7);

			var day = jsonDate.slice(8,10);

			var time = jsonDate.slice(11,16);

			timeSort[timeSort.length-1].time = month+"/"+day+"/"+year+" Time:"+time;
		}

	}

	var ownRequest = false; //am I requesting something
	var otherRequest = false; //am I doing something for someone

      for(i=0; i<data.favours.length; i++){
      	if(data.favours[i].name === userName && data.favours[i].status === "inProgress"){
      		ownRequest=true;
      	}

      	if(data.favours[i].from === userName && data.favours[i].status === "inProgress"){
      		otherRequest=true;
      	}

      }

console.log("timesort length"+ timeSort.length);


	res.render('index2', {
		'favours': timeSort,
		'ownRequest': ownRequest,
		'otherRequest': otherRequest
		}); 


	res.render('index2', {
		'favours': data.favours,
		'ownRequest': ownRequest,
		'otherRequest': otherRequest
		}); 
}*/