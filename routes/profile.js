<<<<<<< HEAD
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
=======
/*
 * GET home page.
 */

// Getting our favour data
var data = require('../data.json');

exports.view = function( req, res ) {
	res.render( 'profile', data );
}
//add current function for json
>>>>>>> e7df80a8eda2f68ca0e51165f16c5e050a13bdb8
