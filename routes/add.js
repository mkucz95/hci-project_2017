var data = require("../data.json");
var user = require("../user.json");

exports.addFavour = function(req, res) {    

	var name = req.query.name;
	var time = req.query.time;
	var location = req.query.location;
	var subject = req.query.subject;
	var description= req.query.description;
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

	/*user.user.status = "active";
	user.user.ownRequestStatus = true;
	user.user.time = time;
	user.user.location = location;
	user.user.subject = subject;
	user.user.description = description;
	user.user.image = image;*/

	res.redirect('/index?showModal=1');
	//take you back to index route
 }
