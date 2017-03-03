'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


 $(window).load(function(){

 	var url = window.location.href;
	var urlSlice = url.slice(url.length-11, url.length);
	console.log("url path: " + url);
		console.log("url slice: " + urlSlice);


	if(urlSlice === "showModal=1"){
		console.log("showModal=1");
		 $('#requestConfirm').modal('show');

	}

	if(urlSlice ==="showModal=2"){
		console.log("showModal=2");
		$('#noConfirmRequest').modal('show');
	}

	if(urlSlice ==="showModal=3"){
		console.log("showModal=3");
		$('#completed').modal('show');
	}

	if(urlSlice ==="showModal=4"){
		console.log("showModal=4");
		$('#cancelled').modal('show');
	}

	if(urlSlice ==="showModal=5"){
		console.log("showModal=5");
		$('#accepted').modal('show');
	}
  });

function initializePage() {
	console.log("Javascript connected!");
	
}