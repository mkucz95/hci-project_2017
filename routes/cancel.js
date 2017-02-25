var data = require('../data.json');
var user = require('../user.json');

exports.cancelled = function( req, res ) {
	var id = req.params.id; 
	console.log("cancelled called for id: " + id);

	data.favours[id-1].status = "cancelled";
	data.favours[id-1].from = "";

	console.log(user.user.name + "status: cancelled");

	res.redirect('/index?showModal=4');
}