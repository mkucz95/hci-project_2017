var data = require('../data.json');
var user = require('../user.json');


exports.write = function(req, res){
	console.log("user.js");

	var name = req.body.name;
	var image = req.body.image;

		console.log(name);
		console.log(image);

	user.user.name = name;
	user.user.image = image;

	for(i=0; i<data.favours.length; i++){ //change all to current user and image
		if(data.favours[i].name==="currentUser"){
			data.favours[i].name = name;
			//data.favours[i].image = image;
		}

		if(data.favours[i].from === "currentUser"){
			data.favours[i].from = name;
		}
	}

	res.send(user.user);
}