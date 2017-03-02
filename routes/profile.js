// Getting our favour data
var data = require('../data.json');
var user = require('../user.json');


exports.view = function( req, res ) { 

	// Count up all stats and find the favour that you requested
	var completed = 0;
	var inDebt = 0;
	var requesting = //create empty placeholder for what user is requesting
      { 
        "name": "",
        "from": "",
        "status": "",
        "image": "",
        "id": "",
        "time": "",
        "location": "",
        "subject": "",
        "description": ""
    };

	for(i=0; i<data.favours.length; i++){
		if(data.favours[i].from === user.user.name && data.favours[i].status === "completed"){
			completed++;
		}

		if(data.favours[i].name === user.user.name && data.favours[i].status === "active"){
			 //if we find what user is actually requesting.
			 requesting.name = data.favours[i].name;
			 requesting.from = data.favours[i].from;
			 requesting.status = data.favours[i].status;
			 requesting.image = data.favours[i].image;
			 requesting.id = data.favours[i].id;
			 requesting.time = data.favours[i].time;
			 requesting.location = data.favours[i].location;
			 requesting.subject = data.favours[i].subject;
			 requesting.description = data.favours[i].description;
		}

		if(data.favours[i].name === user.user.name && data.favours[i].status === "completed"){
			inDebt++;
		}
	}
	// Favour you are requesting


//is your request not yet accepted
	var requestBool = true;
	var length = requesting.length;
	if(requesting.status === ""){
		requestBool = false; //did not find a requesting favour
	}

	var level = 1;	//current level
	var levelUp = 5; //how many to complete to level up
	var progressBar = "";
	var progressVal = "0";
	
	level = 1 + Math.floor(completed/5);  //whole number
	levelUp = completed%5; //how many needed to get multiple of 5


	if(levelUp == 1){
 		progressVal = "80";
 		progressBar = "progress-bar-success";
	}

	if(levelUp == 2){
		progressVal = "60";
 		progressBar = "progress-bar-info";

	}

	if(levelUp == 3){
		progressVal = "40";
 		progressBar = "progress-bar-info";

	}

	if(levelUp == 4){
		progressVal = "20";
 		progressBar = "progress-bar-warning";

	}

	if(levelUp == 5){
		 progressVal = "5";
		 progressBar = "progress-bar-danger";

	}

	var totalFavours = inDebt + completed;
	var owedPercent = inDebt/totalFavours * 100;
	var completedPercent = completed/totalFavours * 100;
		
//define all the variables, not all will be displayed depending on requestBool
		var userName = user.user.name;
		var forName = requesting.name;
		var time = requesting.time;
		var location = requesting.location;
		var subject = requesting.subject;
		var description = requesting.description;
		var image = requesting.image;
	

	res.render('profile', {
		'userName': userName,
		'forName': forName,
		'image': image,
		'time': time,
		'location': location,
		'subject': subject,
		'description': description,
		'inDebt': inDebt,
		'completed': completed,
		'requestBool': requestBool,
		'level': level,
		'levelUp': levelUp,
		'progressBar': progressBar,
		'progressVal': progressVal,
		'owedPercent': owedPercent,
		'completedPercent': completedPercent
	});
};
