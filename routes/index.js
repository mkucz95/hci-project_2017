/*
 * GET home page.
 */

// Getting our favour data
var data = require('../data.json');

exports.view = function( req, res ) {
	res.render( 'index', data );

	var name = req.params.name;
	console.log( "Project name is " + name );
}