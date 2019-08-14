// articuloController.js
var MongoClient = require('mongodb').MongoClient;
const dburl = process.env.DBURL;
const dbName = process.env.DBNAME;
const dbPort = process.env.DBPORT;
var mongoose = require('mongoose');
const moment = require('moment');
const currentDate = moment(Date.now()).format('MMMM Do YYYY HH:mm:ss');

// Import cliente model
const Cliente = require('../models/cliente');

// Display list of all clientes.
exports.cliente_list = function(req, res) {
	MongoClient.connect(dburl+":"+dbPort+"/", { useNewUrlParser: true}, function(err, db) {
		if (err) throw err;
		var dbo = db.db(dbName);
		dbo.collection("cliente").find({}).toArray(function(err, result) {
			if (err) throw err;
			res.render('clienteLista', { 
				today : currentDate, 
				titulo : 'Clinetes Registrado', 
				nuevo : 'Nuevo Cliente',
				clientes_list : result 
			});
			db.close();
		});
	});
};

// Display detail page for a specific cliente.
exports.cliente_detail = function(req, res) {
	res.send('NOT IMPLEMENTED: Cliente detail: ' + req.params.id);
};

// Display cliente create form on GET.
exports.cliente_create_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Cliente create GET');
};

// Handle cliente create on POST.
exports.cliente_create_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Cliente create POST');
};

// Display cliente delete form on GET.
exports.cliente_delete_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Cliente delete GET');
};

// Handle cliente delete on POST.
exports.cliente_delete_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Cliente delete POST');
};

// Display cliente update form on GET.
exports.cliente_update_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Cliente update GET');
};

// Handle cliente update on POST.
exports.cliente_update_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Cliente update POST');
};
