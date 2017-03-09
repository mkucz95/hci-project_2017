'use strict';

// Call this function when the page loads (the "ready" event)

$(document).ready(function() {
  	initializePage(event);
  	 $('#requestFavour').submit(validate);

});


function validate(e){
console.log("validate called");


	var subject = $('#subject').val();
	var date = $('#date').val();
	var time = $('#time').val();
	var location = $('#location').val();
	var description = $('#description').val();

	var allComplete = false;

	//Subject ==============================================================

	if(typeof subject ==="undefined" ){
			$('#subjectForm').attr('class', 'form-group has-error');
			$('#subjectControl').attr('class', 'form-control form-control-error');
			allComplete = false;
	}

	else if(subject.length<3){
		$('#subjectForm').attr('class', 'form-group has-error');
			$('#subjectControl').attr('class', 'form-control form-control-error');
			allComplete = false;
	}

	else{
		$('#subjectForm').attr('class', 'form-group has-success');
		$('#subjectControl').attr('class', 'form-control form-control-success');
		allComplete = true;
	}

	//DESCRIPTION ==============================================================

	if(typeof description === "undefined"){
		$('#descriptionForm').attr('class', 'form-group has-error');
		$('#descriptionControl').attr('class', 'form-control form-control-error');
		allComplete = false;

	}

	else if(description.length<10){
		$('#descriptionForm').attr('class', 'form-group has-error');
		$('#descriptionControl').attr('class', 'form-control form-control-error');
		allComplete = false;

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

	}

	else{
		$('#dateTimeForm').attr('class', 'form-group has-success');
		$('#timeControl').attr('class', 'form-control form-control-success');
		allComplete = true;

	}

	//date ==============================================================


	var today = new Date();
	//today=today.toJSON();

	if(typeof date === "undefined"){
		$('#dateTimeForm').attr('class', 'form-group has-error');
		$('#dateControl').attr('class', 'form-control form-control-error');
		allComplete = false;
	}

	/*else if(date <= today){
		$('#dateTimeForm').attr('class', 'form-group has-error');
		$('#dateControl').attr('class', 'form-control form-control-error');
		allComplete = false;
	}*/

	else{
		$('#dateTimeForm').attr('class', 'form-group has-success');
		$('#timeControl').attr('class', 'form-control form-control-success');
		 allComplete = true;
	}

	//LOCATION ==============================================================


	if(typeof location === "undefined"){
		$('#locationForm').attr('class', 'form-group has-error');
		$('#locationControl').attr('class', 'form-control form-control-error');
		allComplete = false;

	}


	else if(location.length <10){
		$('#locationForm').attr('class', 'form-group has-error');
		$('#locationControl').attr('class', 'form-control form-control-error');
		allComplete = false;

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
  