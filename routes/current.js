var data = require('../current.json');

exports.viewFavour= function(req, res) {
<<<<<<< HEAD
=======
	
	var id = req.params.id;
	console.log(id);

	var name = data.favours[id-1].name;
	var image = data.favours[id-1].image;
	var time = data.favours[id-1].time;
	var location = data.favours[id-1].location;
	var subject = data.favours[id-1].subject;
	var description = data.favours[id-1].description;

>>>>>>> e7df80a8eda2f68ca0e51165f16c5e050a13bdb8

	var name = data.current[0].name;
	var image = data.current[0].image;
	var time = data.current[0].time;
	var location = data.current[0].location;
	var subject = data.current[0].subject;
	var description= data.current[0].description;

	res.render('current', {
		'name': name,
		'image': image,
		'time': time,
		'location': location,
		'subject': subject,
		'description': description
	});

}