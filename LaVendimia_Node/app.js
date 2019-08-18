const express = require('express');
const app = express();
//const dburl = process.env.DBURL;
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

// define routes
var indexRouter = require('./routes/index');
var catalogRouter = require('./routes/catalog');

var models = require('./models/index');

var events = require('events');
var util = require('util');

////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
// configure app

//app.set('views', path.join('__dirname', 'views'));
app.set('views', path.join(__dirname, '/views/'));
app.set('view engine', 'ejs');
//app.set('view engine', 'pug');

// use middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(express.static(path.join(__dirname,'bower_components')));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/catalog', catalogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}
 
// production error handler no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;