'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


 $(window).load(function(){

 	var url = window.location.href;
 	var urlLength = url.length;
 	var found = false;
 	var i = 0;
 	var urlSlice = url.slice(url.length-11, url.length);

//see which modal was called based on where redirected from
//open modal
//automatically close after 3 seconds

	console.log("url path: " + url);
	console.log("url slice: " + urlSlice);

	if(urlSlice === "showModal=1"){	
		console.log("showModal=1");
		 $('#requestConfirm').modal('show');

		 setTimeout(function(){
			hideModal('#requestConfirm')
		}, 5000);

	}

	if(urlSlice ==="showModal=2"){
		console.log("showModal=2");
		$('#noConfirmRequest').modal('show');

		setTimeout(function(){
			hideModal('#noConfirmRequest')
		}, 5000);
	}

	if(urlSlice ==="showModal=3"){
		console.log("showModal=3");
		$('#completed').modal('show');

		setTimeout(function(){
			hideModal('#completed')
		}, 5000);
		
	}

	if(urlSlice ==="showModal=4"){
		console.log("showModal=4");
		$('#cancelled').modal('show');

		setTimeout(function(){
			hideModal('#cancelled')
		}, 5000);
	}

	if(urlSlice ==="showModal=5"){
		console.log("showModal=5");
		$('#accepted').modal('show');

		setTimeout(function(){
			hideModal('#accepted')
		}, 5000);
	}

	if(urlSlice ==="showModal=6"){
		console.log("showModal=6");
		$('#withdraw').modal('show');

		setTimeout(function(){
			hideModal('#withdraw')
		}, 5000);
	}
  });

function hideModal(e){
	console.log("hideModal");
	$(e).click();
}

function initializePage() {
	console.log("Javascript connected!");
}
/*
	$('.Btest').click( sendBtnClick );

    $('.Atest').click(sendBtnClick );


    function sendBtnClick(event){
    	console.log("sendBtnClick"); 
 ga("send", "event", 'favorselection', 'click');
}*/
