'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


 $(window).load(function(){

 	var url = window.location.href;
	var urlSlice = url.slice(url.length-14, url.length);
	console.log("url path: " + url);
		console.log("url slice: " + urlSlice);


	if(urlSlice === "showModal=true"){
		console.log("true");
		 $('#myModal').modal('show');

	}

	if(urlSlice ==="showModal=false")
		console.log("false");
		$('#noConfirmRequest').modal('show');


    });

function initializePage() {
	console.log("Javascript connected!");
	
}