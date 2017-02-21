'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");


	var url = window.location.href;
	var urlSlice = url.slice(url.length-14, url.length);
	console.log("url path: " + url);
		console.log("url slice: " + urlSlice);


	if(urlSlice === "showModal=true"){
		console.log("true");
		$('#myModal').on('shown.bs.modal', function () {
			$('#myInput').focus()
		})
	}
	
}