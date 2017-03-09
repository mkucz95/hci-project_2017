'use strict';

$(window).load(function() {
	FB.getLoginStatus(function(response) {
		console.log("login.js response: "+response);
		if (response.status === 'connected') {
 			 window.location.replace('/index'); //user already logged in
		}
	});
})