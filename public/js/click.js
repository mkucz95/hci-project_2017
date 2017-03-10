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
	var time = $('#timeControl').val();
	var location = $('#locationControl').val();
	var description = $('#descriptionControl').val();

	var allComplete = false;

	//Subject ==============================================================

	if(typeof subject ==="undefined" || subject.length == 0){
			$('#subjectForm').attr('class', 'form-group has-error');
			$('#subjectControl').attr('class', 'form-control form-control-error');
			allComplete = false;
			$("#subjectFeedback").html("Please Enter A Subject");

	}

	else if(subject.length<3){
		$('#subjectForm').attr('class', 'form-group has-error');
			$('#subjectControl').attr('class', 'form-control form-control-error');
			allComplete = false;
			$("#subjectFeedback").html("The Subject Was Not Long Enough");
	}

	else{
		$('#subjectForm').attr('class', 'form-group has-success');
		$('#subjectControl').attr('class', 'form-control form-control-success');
		allComplete = true;
	}

	console.log(subject.length);

	//DESCRIPTION ==============================================================

	if(typeof description === "undefined" || description.length==0){
		$('#descriptionForm').attr('class', 'form-group has-error');
		$('#descriptionControl').attr('class', 'form-control form-control-error');
		allComplete = false;
		$("#descriptionFeedback").html("Please Enter A description");
	}

	else if(description.length<10){
		$('#descriptionForm').attr('class', 'form-group has-error');
		$('#descriptionControl').attr('class', 'form-control form-control-error');
		allComplete = false;
		$("#descriptionFeedback").html("Please Enter A More Specific Description");


	}

	else{
		$('.form-group #description').attr('class', 'form-group has-success');
		$('.form-control #description').attr('class', 'form-control form-control-success');
		allComplete = true;

	}

	//time ==============================================================


	if(typeof time === "undefined"){
		$('#dateTimeForm').attr('class', 'form-group has-error');
		$('#timeControl').attr('class', 'form-control form-control-error');
		allComplete = false;
		console.log(time);
		$("#dateTimeFeedback").html("Please Enter A Time");

	}

	else{
		$('#dateTimeForm').attr('class', 'form-group has-success');
		$('#timeControl').attr('class', 'form-control form-control-success');
		allComplete = true;
				console.log(time);


	}

	//date ==============================================================


	var today = new Date();
	today=today.toJSON();
	today=today.slice(0,10);

	if(typeof date === "undefined"){
		$('#dateTimeForm').attr('class', 'form-group has-error');
		$('#dateControl').attr('class', 'form-control form-control-error');
		allComplete = false;
		$("#dateTimeFeedback").html("Please Enter A Date");
	}

	else if(date < today){
		$('#dateTimeForm').attr('class', 'form-group has-error');
		$('#dateControl').attr('class', 'form-control form-control-error');
		allComplete = false;
		$("#dateTimeFeedback").html("Make Sure Your Date is in the future");

	}

	else{
		$('#dateTimeForm').attr('class', 'form-group has-success');
		$('#timeControl').attr('class', 'form-control form-control-success');
		 allComplete = true;
		 				console.log(date + today);

	}

	//LOCATION ==============================================================


	if(typeof location === "undefined" || location.length==0){
		$('#locationForm').attr('class', 'form-group has-error');
		$('#locationControl').attr('class', 'form-control form-control-error');
		allComplete = false;
		$("#locationFeedback").html("Make Sure Your Specify a Location");


	}


	else if(location.length <10){
		$('#locationForm').attr('class', 'form-group has-error');
		$('#locationControl').attr('class', 'form-control form-control-error');
		allComplete = false;
		$("#locationFeedback").html("Define your location more specifically");


	}

	else{
		$('#locationForm').attr('class', 'form-group has-success');
		$('#locationControl').attr('class', 'form-control form-control-success');
		allComplete = true;

	}

	return allComplete;
}


function initializePage() {
	console.log("Javascript connected!");
}
  