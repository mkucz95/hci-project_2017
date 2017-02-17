// Getting our favour data
var data = require('../current.json');

exports.view = function( req, res ) { 

	var name = data.current[0].name;
	var image = data.current[0].image;
	var time = data.current[0].time;
	var location = data.current[0].location;
	var subject = data.current[0].subject;
	var description= data.current[0].description;

	res.render('profile', {
		'name': name,
		'image': image,
		'time': time,
		'location': location,
		'subject': subject,
		'description': description
	});
};