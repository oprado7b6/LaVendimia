// articuloController.js
var MongoClient = require('mongodb').MongoClient;
const dburl = process.env.DBURL;
const dbName = process.env.DBNAME;
const dbPort = process.env.DBPORT;
var mongoose = require('mongoose');
const moment = require('moment');
const { Connection } = require('../lib/Connection.js')
const currentDate = moment(Date.now()).format('MMMM Do YYYY HH:mm:ss');

// Import articulo model
const Articulo = require('../models/articulo');

// Display list of all Articulos.
exports.articulo_list = function(req, res) {
	MongoClient.connect(dburl+":"+dbPort+"/", { useNewUrlParser: true}, function(err, db) {
		if (err) throw err;
		var dbo = db.db(dbName);
		dbo.collection("articulo").find({}).toArray(function(err, result) {
			if (err) throw err;
			res.render('articuloLista', { 
				today : currentDate, 
				titulo : 'Articulos Registrado', 
				nuevo : 'Nuevo Articulo',
				articulos_list : result 
			});
			db.close();
		});
	});
};

// Display detail page for a specific Articulo.
exports.articulo_detail = function(req, res) {
	//mongoose.connect
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Detalle de Art&iacute;culos'
	});
};

// Display articulo create form on GET.
exports.articulo_create_get = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Art&iacute;culo create GET'
	});
	//res.send('NOT IMPLEMENTED: Articulo create GET');
};

// Handle articulo create on POST.
exports.articulo_create_post = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Art&iacute;culo create POST'
	});
	//res.send('NOT IMPLEMENTED: Articulo create POST');
};

// Display articulo delete form on GET.
exports.articulo_delete_get = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Art&iacute;culo delete GET'
	});
	//res.send('NOT IMPLEMENTED: Articulo delete GET');
};

// Handle articulo delete on POST.
exports.articulo_delete_post = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Art&iacute;culo delete POST'
	});
	//res.send('NOT IMPLEMENTED: Articulo delete POST');
};

// Display articulo update form on GET.
exports.articulo_update_get = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Art&iacute;culo update GET'
	});
	//res.send('NOT IMPLEMENTED: Articulo update GET');
};

// Handle articulo update on POST.
exports.articulo_update_post = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Art&iacute;culo update POST'
	});
	//res.send('NOT IMPLEMENTED: Articulo update POST');
};