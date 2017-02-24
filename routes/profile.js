// Getting our favour data
var data = require('../data.json');
var user = require('../user.json');

exports.view = function( req, res ) { 


	var requesting = [ //favour that current user wants
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
    } ]

//count up all stats and find the favour that you requested
	var completed = 0;
	var inDebt = 0;

	for(i=0; i<data.length; i++){
		if(data.favours[i].from === user.user[0].name && data.favours[i].status === "completed"){
			completed++;
		}

		if(data.favours[i].name === user.user[0].name && data.favours[i].status === "active"){
			var requesting = data.favours[i];
		}

		if(data.favours[i].name === user.user[0].name && data.favours[i].status === "completed"){
			inDebt++;
		}
	}

	var name = requesting.name;
	var image = requesting.image;
	var time = requesting.time;
	var location = requesting.location;
	var subject = requesting.subject;
	var description= requesting.description;

	var requestBool = true;
	if(requesting.status ===""){
		requestBool = false;
	}

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
