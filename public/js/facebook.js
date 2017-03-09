'use strict';


$(document).ready(function() {
FB.getLoginStatus(function(response) {
if (response.status === 'connected') {
  window.location.replace('/index'); //user already logged in
}
  });
})


function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
          FB.api('/me', {fields: 'name,first_name,picture.width(480),birthday,link,about'}, changeUser);

  }
}

function changeUser(response){
  console.log(response);
  var data = {};
  data.image= response.picture.data.url;
  data.name= response.name;
  data.birthday=response.birthday;
  data.link = response.link;
  data.about = response.about;
          
  $.post("/user", {image: data.image, name: data.name, birthday: data.birthday, about: data.about, link:data.link}, function(result){
    console.log('success');
    console.log(data);
    window.location.replace('/index');
  });
               
}


$('#logoutFB').click(fbLogout);

function fbLogout(){
  console.log("fblogout called");
  FB.getLoginStatus(function(response){
    if(response.status === 'connected'){
      FB.logout(function(response){
          console.log("logout success");
                window.location.replace('/');

      });
    }
  });
}



