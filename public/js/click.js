'use strict';

// Call this function when the page loads (the "ready" event)

$(document).ready(function() {
  	initializePage(event);
  	 $('#requestFavour').submit(validate);
});


function validate(e){
console.log("validate called");


	var subject = $('#subjectControl').val();
	var date = $('#dateControl').val();
	console.log("date: "+date);
	var time = $('#timeControl').val();
		console.log("time: "+time);

	var location = $('#locationControl').val();
	var description = $('#descriptionControl').val();
	var allComplete = true;

	//Subject ==============================================================

	if(typeof subject === "undefined" || subject.length == 0){
			$('#subjectForm').attr('class', 'form-group has-error');
			$('#subjectControl').attr('class', 'form-control form-control-error');
			allComplete = false;
			$("#subjectFeedback").html("Please Enter A Subject");

	}

	else if(subject.length<3){
		$('#subjectForm').attr('class', 'form-group has-error');
			$('#subjectControl').attr('class', 'form-control form-control-error');
			allComplete = false;
			$("#subjectFeedback").html("The Subject Is Not Long Enough");
	}

	else if(subject.length>20){
		$('#subjectForm').attr('class', 'form-group has-error');
			$('#subjectControl').attr('class', 'form-control form-control-error');
			allComplete = false;
			$("#subjectFeedback").html("The Subject Is Too Long ");
	}

	else{
		$('#subjectForm').attr('class', 'form-group has-success');
		$('#subjectControl').attr('class', 'form-control form-control-success');
	}

	//DESCRIPTION ==============================================================

	if(typeof description === "undefined" || description.length==0){
		$('#descriptionForm').attr('class', 'form-group has-error');
		$('#descriptionControl').attr('class', 'form-control form-control-error');
		allComplete = false;
		$("#descriptionFeedback").html("Please Enter A description");
	}

	else if(description.length<7){
		$('#descriptionForm').attr('class', 'form-group has-error');
		$('#descriptionControl').attr('class', 'form-control form-control-error');
		allComplete = false;
		$("#descriptionFeedback").html("Please Enter A More Specific Description");
	}

	else{
		$('.form-group #description').attr('class', 'form-group has-success');
		$('.form-control #description').attr('class', 'form-control form-control-success');

	}

	//time ==============================================================


	if(typeof time === "undefined" ||time.length==0){
		$('#dateTimeForm').attr('class', 'form-group has-error');
		$('#timeControl').attr('class', 'form-control form-control-error');
		allComplete = false;
		//console.log(time);
		$("#dateTimeFeedback").html("Please Enter A Time");

	}

	else{
		$('#dateTimeForm').attr('class', 'form-group has-success');
		$('#timeControl').attr('class', 'form-control form-control-success');
	}

	//date ==============================================================
	var today = new Date();
	today=today.toJSON();
	today=today.slice(0,10);


	if(typeof date === "undefined" ||date.length==0){
		$('#dateTimeForm').attr('class', 'form-group has-error');
		$('#dateControl').attr('class', 'form-control form-control-error');
		allComplete = false;
		$("#dateTimeFeedback").html("Please Enter A Date");
	}

	else if(Date.parse(date) < Date.parse(today)){
		$('#dateTimeForm').attr('class', 'form-group has-error');
		$('#dateControl').attr('class', 'form-control form-control-error');
		allComplete = false;
		$("#dateTimeFeedback").html("Make Sure Your Date is in the future");

		//console.log(Date.parse(date) +"|||" + Date.parse(today));
	}

	else{
		$('#dateTimeForm').attr('class', 'form-group has-success');
		$('#timeControl').attr('class', 'form-control form-control-success');
	}

	//LOCATION ==============================================================


	if(typeof location === "undefined" || location.length==0){
		$('#locationForm').attr('class', 'form-group has-error');
		$('#locationControl').attr('class', 'form-control form-control-error');
		allComplete = false;
		$("#locationFeedback").html("Make Sure Your Specify a Location");
	}


	else if(location.length <8){
		$('#locationForm').attr('class', 'form-group has-error');
		$('#locationControl').attr('class', 'form-control form-control-error');
		allComplete = false;
		$("#locationFeedback").html("Define your location more specifically");
	}


	else if(location.length>20){
		$('#locationForm').attr('class', 'form-group has-error');
			$('#locationControl').attr('class', 'form-control form-control-error');
			allComplete = false;
			$("#locationFeedback").html("The Location Is Too Detailed");
	}

	else{
		$('#locationForm').attr('class', 'form-group has-success');
		$('#locationControl').attr('class', 'form-control form-control-success');
	}

	if(allComplete){
		return;
	}

	else{
		e.preventDefault();
	}
}


function initializePage() {
	console.log("Javascript connected!");
}
  