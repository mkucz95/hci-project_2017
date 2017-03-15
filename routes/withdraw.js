var data = require('../data.json');
var user = require('../user.json');

exports.view = function( req, res ) {
	var status = req.params.status; 
	var id = req.params.id; 
	var name = req.params.name;
	var subject = req.params.subject;
	var location= req.params.location;


	console.log("withdraw called for id: " + id);

	console.log(data.favours[id]);

for(i = 0; i<data.favours.length; i++){
	if(data.favours[i].name === name && data.favours[i].id==id && data.favours[i].subject===subject
	&& data.favours[i].location ===location ){
			data.favours[i].status="cancelled";
		break;
	}
}


	console.log(data.favours[i].subject+" :element at old id");

	console.log(data.favours[i]);


	//data.favours.splice(id, 1);

	console.log(data.favours);


	res.redirect('/index?showModal=6');
}