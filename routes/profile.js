// Getting our favour data
var data = require('../data.json');
var user = require('../user.json');

exports.view = function( req, res ) { 


	var requesting= [
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
		if(data.favours[i].from === user[0].name && data.favours[i].status === "completed"){
			completed++;
		}

		if(data.favours[i].name === user[0].name && data.favours[i].status === "active"){
			var requesting = data.favours[i];
		}

		if(data.favours[i].name === user[0].name && data.favours[i].status === "completed"){
			inDebt++;
		}
	}

	var name = requesting.current[0].name;
	var image = requesting.current[0].image;
	var time = requesting.current[0].time;
	var location = requesting.current[0].location;
	var subject = requesting.current[0].subject;
	var description= requesting.current[0].description;



	res.render('profile', {
		'name': name,
		'image': image,
		'time': time,
		'location': location,
		'subject': subject,
		'description': description,
		'inDebt': inDebt,
		'completed': completed
	});
};
