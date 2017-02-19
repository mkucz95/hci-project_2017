var data = require('../data.json');

exports.view = function( req, res ) {
	res.render( 'cancel', data );
}


