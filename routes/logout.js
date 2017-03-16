var user = require('../user.json');

exports.out = function( req, res ) {

	console.log("logout.js called");


	user.user.name="noUser";
	user.user.image="";
	user.user.birthday= "";
	user.user.link= "";
	user.user.about="";

	console.log("user: "+ user.user.name);


	res.redirect('/');
}