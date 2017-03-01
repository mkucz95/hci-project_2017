// Getting our favour data
var data = require('../data.json');
var user = require('../user.json');


exports.view = function( req, res ) { 

	// Count up all stats and find the favour that you requested
	var completed = 0;
	var inDebt = 0;
	var requesting = //create empty placeholder for what user is requesting
      { 
        "name": "",
        "from": "",
        "status": "",
        "image": "",
        "id": "",
        "time": "",
        "location": "",
        "subject": "",
        "description": ""
    };

	for(i=0; i<data.favours.length; i++){
		if(data.favours[i].from === user.user.name && data.favours[i].status === "completed"){
			completed++;
		}

		if(data.favours[i].name === user.user.name && data.favours[i].status === "active"){
			 //if we find what user is actually requesting.
			 requesting.name = data.favours[i].name;
			 requesting.from = data.favours[i].from;
			 requesting.status = data.favours[i].status;
			 requesting.image = data.favours[i].image;
			 requesting.id = data.favours[i].id;
			 requesting.time = data.favours[i].time;
			 requesting.location = data.favours[i].location;
			 requesting.subject = data.favours[i].subject;
			 requesting.description = data.favours[i].description;
		}

		if(data.favours[i].name === user.user.name && data.favours[i].status === "completed"){
			inDebt++;
		}
	}
	// Favour you are requesting


//is your request not yet accepted
	var requestBool = true;
	var length = requesting.length;
	if(requesting.status === ""){
		requestBool = false; //did not find a requesting favour
	}
		
//define all the variables, not all will be displayed depending on requestBool
		var name = user.user.name;
		var time = requesting.time;
		var location = requesting.location;
		var subject = requesting.subject;
		var description = requesting.description;
		var image = requesting.image;
	

	res.render('profile', {
		'name': name,
		'image': image,
		'time': time,
		'location': location,
		'subject': subject,
		'description': description,
		'inDebt': inDebt,
		'completed': completed,
		'requestBool': requestBool
	});
};
