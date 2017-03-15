// Getting our favour data
var data = require('../data.json');
var user = require('../user.json');

exports.view = function( req, res ) { 

	var name = user.user.name;

	var ownRequest = [];


for(i=0; i<data.favours.length; i++){

	if(data.favours[i].name === name && 
		(data.favours[i].status === "active" || data.favours[i].status === "inProgress" )){
			ownRequest.push(data.favours[i]);
		}
}

	res.render('own', {
		'ownRequest': ownRequest
	});
};
