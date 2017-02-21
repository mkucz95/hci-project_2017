var data = require("../data.json");

exports.addFavour = function(req, res) {    
	// Your code goes here
	console.log("addRequest called");

	var name = req.query.name;
	var time = req.query.time;
	var location = req.query.location;
	var subject = req.query.subject;
	var description= req.query.description;
	var id = 5;
	var from = "";


	//add new object to JSON file data.json
	var newFavour = {
		name: name,
        from: "",
        id: "",
        time: time,
        location: location,
        subject: subject,
        description: description
	}

	data.favours.push(newFavour);

	console.log(name);
	console.log(time);
	console.log(location);
	console.log(subject);
	console.log(description);

	res.redirect('/index?showModal=true');
	//take you back to index route
 }