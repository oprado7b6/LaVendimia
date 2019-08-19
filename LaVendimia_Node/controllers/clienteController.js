// articuloController.js
var MongoClient = require('mongodb').MongoClient;
var app = require('../app');
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
		var maxvalue = 0;
		dbo.collection("cliente").find({}).sort({_id: -1}).toArray(function(err, resultmax) {
			if (err) throw err;
			maxvalue = resultmax[0]._id;
			console.log(maxvalue+1);
		});
		dbo.collection("cliente").find({}).toArray(function(err, result) {
			if (err) throw err;
			res.render('clienteLista', { 
				today : currentDate, 
				titulo : 'Clientes Registrados', 
				nuevo : 'Nuevo Cliente',
				nuevoCliente : maxvalue+1,
				clientes_list : result 
			});
			db.close();
		});
	});
};

// Display detail page for a specific cliente.
exports.cliente_detail = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Detalle de Cliente'
	});
};

// Display cliente create form on GET.
exports.cliente_create_get = function(req, res) {
	console.log("cliente_create_get");
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Crea Cliente'
	});
};

// Handle cliente create on POST.
exports.cliente_create_post = function(req, res) {
	console.log("cliente_create_post");
	const postBody = req.body;
	//console.log(postBody);
	var id = postBody.cliente.id
	var name = postBody.cliente.nombre; 
	var email = postBody.cliente.correo_electronico; 
	var primer_apellido = postBody.cliente.primer_apellido; 
	var segundo_apellido = postBody.cliente.segundo_apellido;
	var telefono = postBody.cliente.telefono; 
	var rfc = postBody.cliente.rfc;
	var domicilio = postBody.cliente.direccion;
	let maxvalue = parseInt(id, 10);

	MongoClient.connect(dburl+":"+dbPort+"/", { useNewUrlParser: true}, function(err, db) {
		if (err) throw err;
		var dbo = db.db(dbName);
		var lastid = 0;
		dbo.collection("cliente").find({}).sort({_id: -1}).toArray(function(err, resultmax) {
			if (err) throw err;
			lastid = resultmax[0]._id;
			maxvalue = parseInt(lastid+1, 10);
		});
		var data = { 
			"_id": maxvalue,
			"nombre": name, 
			"primer_apellido": primer_apellido, 
			"segundo_apellido": segundo_apellido, 
			"rfc": rfc, 
			"direccion": domicilio, 
			"telefono": telefono,
			"correo_electronico": email
		}
		console.log(data);
		dbo.collection('cliente').insertOne(data, function(err, collection){ 
			if (err) throw err;
			console.log("Record inserted Successfully");       
			db.close();
		});
	});
	return res.redirect('/catalog/clientes');
};

// Display cliente delete form on GET.
exports.cliente_delete_get = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Borra Cliente'
	});
};

// Handle cliente delete on POST.
exports.cliente_delete_post = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Borra Cliente'
	});
};

// Display cliente update form on GET.
exports.cliente_update_get = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Actualiza Cliente'
	});
};

// Handle cliente update on POST.
exports.cliente_update_post = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Actualiza Cliente'
	});
};
