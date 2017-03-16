var data = require('../data.json');
var user = require('../user.json');


exports.write = function(req, res){

	var name = req.body.name;
	var image = req.body.image;
	var birthday = req.body.birthday;
	var link = req.body.link;
	var about = req.body.about;

	user.user.name = name;
	user.user.image = image;
	user.user.birthday = birthday;
	user.user.link = link;
	user.user.about = about;

		console.log("user.js: "+ user.user.name);


	/*for(i=0; i<data.favours.length; i++){ //change all to current user and image
		if(data.favours[i].name==="currentUser"){
			data.favours[i].name = name;
			//data.favours[i].image = image;
		}

		if(data.favours[i].from === "currentUser"){
			data.favours[i].from = name;
		}
	}*/

	res.send(user.user);
	res.redirect('/index');
}