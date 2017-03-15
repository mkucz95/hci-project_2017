var user = require('../user.json');

exports.out = function( req, res ) {

	console.log("logout called");

	
	user.user.name="currentUser";
	user.user.image="";
	user.user.birthday= "";
	user.user.link= "";
	user.user.about="";

	res.redirect('/');
}