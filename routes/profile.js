// Getting our favour data
var data = require('../data.json');
var user = require('../user.json');

exports.view = function( req, res ) { 


	var requesting = [ //favour that current user wants
      { 
        "name": user.user[0].name,
        "from": user.user[0].from,
        "status": user.user[0].status,
        "image": user.user[0].image,
        "id": user.user[0].id,
        "time": user.user[0].time,
        "location": user.user[0].location,
        "subject": user.user[0].subject,
        "description": user.user.description
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

	// Favour you are requesting
	var name = user.user[0].name;
	var image = user.user[0].image;
	var time = user.user[0].time;
	var location = user.user[0].location;
	var subject = user.user[0].subject;
	var description = user.user[0].description;
	var status = user.user[0].status;

	var requestBool = true;
	if(status ===""){
		requestBool = false;
	}

	if( requestBool )
	{
		name = user.user[1].name;
		time = user.user[1].time;
		location = user.user[1].location;
		subject = user.user[1].subject;
		description = user.user[1].description;
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
