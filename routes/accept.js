var data = require('../data.json');
var user = require('../user.json');

exports.confirmed = function( req, res ) {
	var id = req.params.id; 
	console.log("accept called for id: " + id);

	data.favours[id-1].status = "inProgress";
	data.favours[id-1].from = user.user[0].name;

	console.log("from "+ user.user[0].name + "status: inProgress");

	res.redirect('/index?showModal=5');
}


