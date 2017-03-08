'use strict';

// Call this function when the page loads (the "ready" event)

$(document).ready(function() {
  	initializePage(event);

  	$('#submitBtn').onclick(validate());

});


function validate(e){
console.log("validate called")
	e.preventDefault();

	var subject = $('#subject').val();
	var date = $('#date').val();
	var time = $('#time').val();
	var location = $('#location').val();
	var description = $('#description').val();

	if(subject === "" ){
			$('.form-group #subject').attr('class', 'form-group has-danger');
			$('.form-control #subject').attr('id', 'subject inputHorizontalDanger')
	}

	else{
		$('.form-group #subject').attr('class', 'form-group has-success');
		$('.form-control #subject').attr('id', 'subject inputHorizontalSuccess');
	}

	if(description === ""){
		$('.form-group #description').attr('class', 'form-group has-danger');
		$('.form-control #description').attr('id', 'description inputHorizontalDanger')

	}
	else{
		//FINISH DOING THE ELSE STATEMENTS

	}

	if(time === ""){
		$('.form-group #time').attr('class', 'form-group has-danger');
		$('.form-control #time').attr('id', 'time inputHorizontalDanger')

	}
	else{

	}

	if(date === ""){
		$('.form-group #time').attr('class', 'form-group has-danger');
		$('.form-control #time').attr('id', 'time inputHorizontalDanger')

	}
	else{

	}

	if(location === ""){
		$('.form-group #location').attr('class', 'form-group has-danger');
		$('.form-control #location').attr('id', 'location inputHorizontalDanger')

	}
	else{

	}



}


function initializePage() {
	console.log("Javascript connected!");
}
  