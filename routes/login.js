/*
 * GET home page.
 */

// Getting our favour data
var data = require('../data.json');

exports.view = function( req, res ) {
	res.render( 'login', data );
}
