'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
}



$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})



$('#cancel').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

