var data = require('../data.json');
var user = require('../user.json');

exports.viewFavour= function(req, res) {


	var currentFavour =[
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
      ]

      var userName = "";
      for(i=0; i<user.length; i++){
      	if(user.user[i].status ==="active"){
      		userName = user.user[i].name;
      		break;
      	}
      }


      for(i=0; i<data.length; i++){
      	if(data.favours[i].from === userName && data.favours[i].status === "inProgress"){
      		currentFavour = data.favours[i];
      		break;
      	}
      }

	var name = currentFavour[0].name;
	var image = currentFavour[0].image;
	var time = currentFavour[0].time;
	var location = currentFavour[0].location;
	var subject = currentFavour[0].subject;
	var description= currentFavour[0].description;
	var id = currentFavour[0].id;
	id = 1;

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