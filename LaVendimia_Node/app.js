const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = process.env.DATABASE;
const models = require('./models');

mongoose.connect(db, { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('connected', () => {
		console.log('Mongoose connection open on ${process.env.DATABASE} '+ db );
	})
	.on('error', (err) => {
		console.log('Connection error: ${err.message}');
	});
	
//const routes = require('./routes/index');
const app = express();
const fs = require('fs');

const modelsPath = path.resolve(__dirname, 'models')
fs.readdirSync(modelsPath).forEach(file => {
  require(modelsPath + '/' + file);
})

// configure app
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.set('view engine', 'pug');

// use middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'bower_components')));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static('public'));

// define routes
var todosRoutes = require('./todos');
app.use(todosRoutes);
//app.use('./', routes);

module.exports = app;