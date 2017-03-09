
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var login = require('./routes/login');
var index = require('./routes/index');
var select = require('./routes/select');
var request = require('./routes/request');
var current = require('./routes/current');
var profile = require('./routes/profile');
var accept = require('./routes/accept');
var add = require('./routes/add');
var completed = require('./routes/completed');
var cancel = require('./routes/cancel');
var own = require('./routes/own');
var withdraw = require('./routes/withdraw');
var user = require('./routes/user');
// For AB testing

/*var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCOMXd7rno4R-ng4TFNG3ZM9NHB4WLOsXM'
});*/
// Example route
// var user = require('./routes/user');

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', login.view);
app.get('/select/:id', select.viewFavour);
app.get('/request', request.view);
app.get('/current', current.viewFavour);
app.get('/profile', profile.view);
app.get('/accept/:id', accept.confirmed);
app.post('/add', add.addFavour);
app.get('/completed/:id', completed.finished);
app.get('/cancel/:id', cancel.cancelled);
app.get('/own', own.view);
app.get('/withdraw/:id', withdraw.view);
app.post('/user', user.write);


// For AB Testing
app.get('/index', index.view);
app.get('/index2', index.viewTwo);
// Example route
// app.get('/users', user.list);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
