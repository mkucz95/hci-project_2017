/*
 * GET home page.
 */

// Getting our favour data
var data = require('../data.json');

exports.view = function( req, res ) {
	//make new variable here to filter

	var timeSort = new Array(); //create new empty array to store all non expired favours


	for(i=0; i<data.length; i++){
		//var jsonDate = data.favours[i].time;
		//var currentDate = javascript function;
		//var status = data.favours[i].status;
		if(jsonDate>currentDate && status ==="active"){ //only include the favours that people can select
			timeSort.push(data.favour[i]);
		}
	}

	//res.render('index', timeSort) //pass in the filtered variable
	res.render('index', timeSort ); 
}
//add current function for json