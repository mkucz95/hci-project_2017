/*
 * GET home page.
 */

// Getting our favour data
var data = require('../data.json');

exports.view = function( req, res ) {
	//make new variable here to filter
	res.render( 'index', data ); //pass in the filtered variable
}
//add current function for json