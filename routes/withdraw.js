var data = require('../data.json');
var user = require('../user.json');

exports.view = function( req, res ) {
	var id = req.params.id; 
	console.log("withdraw called for id: " + id);

	data.favours.splice(id-1, 1);

	console.log(user.user.name + "status: withdrawn");

	res.redirect('/index?showModal=6');
}