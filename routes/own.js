// Getting our favour data
var data = require('../data.json');
var user = require('../user.json');

exports.view = function( req, res ) { 

	// Favour you are requesting
	var name = user.user.name;
	var image = user.user.image;
	var time = user.user.time;
	var location = user.user.location;
	var subject = user.user.subject;
	var description = user.user.description;
	var status = user.user.status;

	res.render('own', {
		'name': name,
		'image': image,
		'time': time,
		'location': location,
		'subject': subject,
		'description': description
	});
};
