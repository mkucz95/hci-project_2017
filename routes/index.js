/*
 * GET home page.
 */

// Getting our favour data
var data = require('../data.json');
var user = require('../user.json');

exports.view = function( req, res ) {
	//make new variable here to filter

	var timeSort = []; //create new empty array to store all non expired favours
	var userName = user.user.name; 


	for(i=0; i<data.favours.length; i++){
		var jsonDate = data.favours[i].time;
		var dateObj = new Date();
		var currentTime = dateObj.toJSON();
		var status = data.favours[i].status;

		if(userName === data.favours[i].name){
			continue; //skip this request if it is the person's who submited it
		}

		if(status === "active" ){ //only include the favours that people can select
			timeSort[timeSort.length]= data.favours[i];
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

	//res.render('index', timeSort) //pass in the filtered variable
	res.render('index', {
		//'name': name,
		'favours': timeSort,
		'ownRequest': ownRequest,
		'otherRequest': otherRequest
		}); 
}
