'use strict';


$(document).ready(function() {
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
 			 window.location.replace('/index'); //user already logged in
		}
	});
})