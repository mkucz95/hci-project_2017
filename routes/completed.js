var data = require('../data.json');
var user = require('../user.json');

exports.finished = function( req, res ) {
	var id = req.params.id; 
	console.log("finished called for id: " + id);

	data.favours[id-1].status = "completed";
	data.favours[id-1].from = user.user[0].name;

	console.log("from "+ user.user[0].name + "status: completed");

	res.redirect('/index?showModal=3');
}






