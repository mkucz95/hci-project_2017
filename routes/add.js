var data = require("../data.json");
var user = require("../user.json");

exports.addFavour = function(req, res) {    

	var name = user.user.name;
	var time = req.body.time;
	var location = req.body.location;
	var subject = req.body.subject;
	var description= req.body.description;
	var id = data.favours.length; //add at the end of array
	var image = user.user.image;
	var from = "";
	var status = "active";


	var newFavour = {
		 "name": name,
        "from": "",
        "status": status,
        "image": image,
        "id": id,
        "time": time,
        "location": location,
        "subject": subject,
        "description": description
	}

	data.favours.push(newFavour);

	res.send(newFavour);

	res.redirect('/index?showModal=1');
	//take you back to index route
 }

