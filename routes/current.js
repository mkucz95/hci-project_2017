var data = require('../data.json');
var user = require('../user.json');

exports.viewFavour= function(req, res) {


	var currentFavour =
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
      }
      

      var userName = user.user.name; 

      for(i=0; i<data.favours.length; i++){
      	if(data.favours[i].from === userName && data.favours[i].status === "inProgress"){
      		currentFavour=data.favours[i];
      	}
      }

	var name = currentFavour.name;
	var image = currentFavour.image;
	var time = currentFavour.time;
	var location = currentFavour.location;
	var subject = currentFavour.subject;
	var description= currentFavour.description;
	var id = currentFavour.id;


	res.render('current', {
		'name': name,
		'image': image,
		'time': time,
		'location': location,
		'subject': subject,
		'description': description,
		'id': id
	});

}