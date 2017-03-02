var data = require('../data.json');
var user = require('../user.json');

exports.finished = function( req, res ) {
	var id = req.params.id; 

	data.favours[id-1].status = "completed";
	data.favours[id-1].from = user.user.name;

	res.redirect('/index?showModal=3');
}






