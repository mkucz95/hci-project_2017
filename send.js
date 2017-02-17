$(document).ready(function() {
	initializePage();
	console.log('initializePage');
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#submit').click(send);
	console.log("submitted");
}


function send(favour){
		e.preventDefault();

	console.log("start of send function");

var subject = document.getElementsById('#subject');
var description = document.getElementsById('#description');

console.log('subject: '+subject);

}

/* function ConvertFormToJSON(form){
    var array = jQuery(form).serializeArray();
    var json = {};
    
    jQuery.each(array, function() {
        json[this.name] = this.value || '';
    });
    
    return json;
}*/


/*
 * Make an AJAX call to retrieve project details and add it in
 */
/*function sendJSON(favour) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var form = this;
	// get rid of 'project' from the front of the id 'project3'
	var json = ConvertFormToJSON(form);


return json;
}*/


