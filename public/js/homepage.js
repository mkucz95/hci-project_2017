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


	if(urlSlice === "showModal=1"){
		console.log("true");
		 $('#requestConfirm').modal('show');

	}

	if(urlSlice ==="showModal=2"){
		console.log("false");
		$('#noConfirmRequest').modal('show');
	}

	if(urlSlice ==="showModal=3"){
		console.log("false");
		$('#completed').modal('show');
	}

	if(urlSlice ==="showModal=4"){
		console.log("false");
		$('#cancelled').modal('show');
	}





    });

function initializePage() {
	console.log("Javascript connected!");
	
}