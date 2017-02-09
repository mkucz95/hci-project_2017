/*
 * GET home page.
 */

exports.view = function(req, res) {
  res.render('index');
};

exports.view = function( req, res ) {
	res.render( 'index', {
		'favors': [
			{ 'name': 'Sample',
			'image': 'sample.png',
			'id': 'favor1'
			},
			{ 'name': 'Sample',
				'image': 'sample.png',
				'id': 'favor2'
			}
		]
	})
}