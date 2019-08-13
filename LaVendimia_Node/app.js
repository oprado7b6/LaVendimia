const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const db = process.env.DATABASE;
const app = express();

// define routes
var indexRouter = require('./routes/index');
var catalogRouter = require('./routes/catalog');

var models = require('./models/index');

var events = require('events');
var util = require('util');
var eventsEmitter = new events.EventEmitter();

//// Database connection to mongoDB 
mongoose.connect(db, { useNewUrlParser: true});
mongoose.Promise = global.Promise;
mongoose.connection.on('connected', () => {
		console.log('Mongoose connection open on ${process.env.DATABASE} '+ db );
	})
	.on('error', (err) => {
		console.log('Unable Connection error: ${err.message}', err);
	});
/// End database connection

//////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
// configure app

//app.set('views', path.join('__dirname', 'views'));
app.set('views', path.join(__dirname, '/views/'));
app.set('view engine', 'ejs');
//app.set('view engine', 'pug');

// use middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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