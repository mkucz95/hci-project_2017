var data = require('../data.json');
var user = require('../user.json');

exports.viewFavour= function(req, res) { 
	
	var id = req.params.id; 
	var userName = user.user.name;
	console.log(id);

	var inProgress = false;

	for(i=0; i<data.favours.length; i++){
		if(data.favours[i].status === "inProgress" && data.favours[i].from === userName){
			inProgress = true;
		}
	}

	var name = data.favours[id-1].name;
	var image = data.favours[id-1].image;
	var location = data.favours[id-1].location;
	var subject = data.favours[id-1].subject;
	var description= data.favours[id-1].description;

	var jsonDate = data.favours[id-1].time;
			
		var year = jsonDate.slice(0,4);
		var month = jsonDate.slice(5,7);
		var day = jsonDate.slice(8,10);
		var time = jsonDate.slice(11,16);

	var timeFavour = month+"/"+day+"/"+year+" Time: "+time;

	res.render('select', {
		'name': name,
		'image': image,
		'time': timeFavour,
		'location': location,
		'subject': subject,
		'description': description,
		'id': id,
		'inProgress': inProgress
	});
 
	console.log(subject);
}

exports.view = function(req, res) { 
	res.render('select', {
		'image': data.image,
		'id': data.id,
		'time': data.time,
		'location': 'location',
		'subject': 'data.subject',
		'description': 'data.description',
		'id': id
	});

};


