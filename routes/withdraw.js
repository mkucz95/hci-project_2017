var data = require('../data.json');
var user = require('../user.json');

exports.view = function( req, res ) {
	var id = req.params.id; 
	console.log("withdraw called for id: " + id);

	console.log(data.favours[id]);


	data.favours[id].status="cancelled";
	
	console.log(data.favours[id].subject+" :element at old id");

	console.log(data.favours[id]);


	data.favours.splice(id, 1);

	console.log(data.favours);


	res.redirect('/index?showModal=6');
}