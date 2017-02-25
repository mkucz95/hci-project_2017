var data = require("../data.json");
var user = require("../user.json");

exports.addFavour = function(req, res) {    
	// Your code goes here
	console.log("addRequest called");

	var name = req.query.name;
	var time = req.query.time;
	var location = req.query.location;
	var subject = req.query.subject;
	var description= req.query.description;
	var id = data.favours.length;
	var image = user.user.image;
	var from = "";
	var status = "active";

	//data.favours.push(newFavour);
	user.user.status = "active";
	user.user.ownRequestStatus = true;
	user.user.time = time;
	user.user.location = location;
	user.user.subject = subject;
	user.user.description = description;
	user.user.image = image;

	console.log(name);
	console.log(time);
	console.log(location);
	console.log(subject);
	console.log(description);

	res.redirect('/index?showModal=1');
	//take you back to index route
 }
