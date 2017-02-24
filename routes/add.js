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
	var image = user.user[0].image;
	var from = "";
	var status = "active";


	//add new object to JSON file data.json
	var newFavour = {
		name: name,
        from: from,
        status: status,
        image: image,
        //id: id+1,
        id: 1,
        time: time,
        location: location,
        subject: subject,
        description: description
	}

	//data.favours.push(newFavour);
	user.user[0].status = "active";
	user.user.push(newFavour);

	console.log(name);
	console.log(time);
	console.log(location);
	console.log(subject);
	console.log(description);

	res.redirect('/index?showModal=1');
	//take you back to index route
 }
