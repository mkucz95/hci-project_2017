var data = require('../data.json');

exports.view= function(req, res) { 
	res.render('select', {
		'image': data.image,
		'id': data.id,
		'time': data.time,
		'location': 'location',
		'subject': 'data.subject',
		'description': 'data.description'
	});
};