/*
 * GET home page.
 */

// Getting our favour data
var data = require('../data.json');
var user = require('../user.json');

exports.view = function( req, res ) {
	//make new variable here to filter

	var timeSort = new Array(); //create new empty array to store all non expired favours

	/*for(i=0; i<data.length; i++){
		var jsonDate = data.favours[i].time;
		var dateObj = new Date();
		var currentTime = dateObj.toJSON();
		var status = data.favours[i].status;
		if(jsonDate>currentTime && status ==="active"){ //only include the favours that people can select
			timeSort.push(data.favour[i]);
		}
	}*/

	var ownRequest = user.user.ownRequestStatus;
	var otherRequest = user.user.otherRequestStatus;

	//res.render('index', timeSort) //pass in the filtered variable
	res.render('index', {
		'favours': data.favours,
		'ownRequest': ownRequest,
		'otherRequest': otherRequest
		}); 
}
