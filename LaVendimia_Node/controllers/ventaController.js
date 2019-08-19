// ventaController.js
var MongoClient = require('mongodb').MongoClient;
const dburl = process.env.DBURL;
const dbName = process.env.DBNAME;
const dbPort = process.env.DBPORT;
const { Connection } = require('../lib/Connection.js')
const mongoose = require('mongoose');
const moment = require('moment');

const currentDate = moment(Date.now()).format('MMMM Do YYYY HH:mm:ss');
const currentDateDB = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

// Import venta model
var VentaMod = require('../models/venta');
var VentaArticuloMod = require('../models/ventaArticulo');
var ArticuloMod = require('../models/articulo');
var ClienteMod = require('../models/cliente');

var Venta = mongoose.model('venta');

exports.index = function(req, res) {
	res.render('index', {
		today : currentDate
	});
};

// Display list of all ventas.
exports.venta_list = function(req, res, next) {
	let rs_clientes;
	let rs_articulos;
	let rs_ventas;
	let rs_articulos_venta;
	let rs_configuracion;
	let rs_abonos;

	MongoClient.connect(dburl+":"+dbPort+"/", { useNewUrlParser: true}, function(err, db) {
		if (err) throw err;
		var dbo = db.db(dbName);
		var maxvalue = 0;
		dbo.collection("venta").find({}).sort({folio: -1}).toArray(function(err, resultmax) {
			if (err) throw err;
			maxvalue = resultmax[0].folio;
			maxvalue = maxvalue + 1;
		});

		dbo.collection("configuracion").find({}).toArray(function(err, resultconfig) {
			if (err) throw err;
			rs_configuracion = resultconfig;
			dbo.collection("plazo").find({plazo: { $lte: rs_configuracion[0].plazo_max} }).toArray(function(err, resultabono) {
				if (err) throw err;
				rs_abonos = resultabono;
			});
		});

		dbo.collection("cliente").find({}).toArray(function(err, resultclientes) {
			if (err) throw err;
			rs_clientes = resultclientes;
		});
		dbo.collection("articulo").find({}).toArray(function(err, resultarticulos) {
			if (err) throw err;
			rs_articulos = resultarticulos;
		});
		dbo.collection("venta").find({}).toArray(function(err, resultventa) {
			if (err) throw err;
			rs_ventas = resultventa;
			rs_ventas.forEach((venta) => {
				venta.fecha_venta = moment(venta.fecha_venta).format('YYYY/MM/DD HH:MM:ss');
				rs_clientes.forEach((cliente) => {
					if (cliente._id === venta.cliente){
						venta.cliente = cliente;
					}
				});

				dbo.collection("venta_articulo").find({ folio: venta.folio }).toArray(function(err, resultvart) {
					if (err) throw err;
					rs_articulos_venta = resultvart;
					venta["articulos"] = JSON.stringify(rs_articulos_venta);
				});
			});
			res.render('ventaLista', { 
				today : currentDate, 
				titulo : 'Ventas Activas',
				nuevoFolio : maxvalue,
				ventas : rs_ventas,
				plazos : rs_abonos,
				clientes : rs_clientes,
				articulos : rs_articulos,
				configuracion : rs_configuracion
			});
			db.close();
		});
	});
};

// Display detail page for a specific venta.
exports.venta_detail = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Detalle de Venta'
	});
};

// Display venta create form on GET.
exports.venta_create_get = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Nueva Venta'
	});
};

// Handle venta create on POST.
exports.venta_create_post = function(req, res) {
	console.log("venta_create_post");
	const postBody = req.body;
	console.log(postBody);
	
	let idCliente = parseInt(postBody.venta.id_cliente);
	let folio = postBody.venta.folio; 
	let enganche = parseFloat(postBody.venta.enganche.substring(1)); 
	let bonificacion = parseFloat(postBody.venta.bonificacion.substring(1)); 
	let total = parseFloat(postBody.venta.total.substring(1));
	let tasa_aplicada = parseFloat(postBody.config.tasa); 
	let plazo_maximo = parseInt(postBody.config.plazo_max);
	let articulos = JSON.parse(postBody.venta.articulos);
	let maxvalue = parseInt(folio, 10);
	let fecha_venta = Date.parse(currentDateDB);
	let idArticulo = 0;
	let cantidad = 0;
	let precio = 0.00;
	let importe = 0.00;
	MongoClient.connect(dburl+":"+dbPort+"/", { useNewUrlParser: true}, function(err, db) {
		if (err) throw err;
		var dbo = db.db(dbName);
		var lastid = 0;
		dbo.collection("venta").find({}).sort({folio: -1}).toArray(function(err, resultmax) {
			if (err) throw err;
			lastid = resultmax[0].folio;
			maxvalue = parseInt(lastid+1, 10);
			console.log(maxvalue);
		});
		var ventaData = { 
			"folio": maxvalue,
			"cliente": idCliente, 
			"bonificacion": bonificacion, 
			"enganche": enganche, 
			"total": total, 
			"tasa": tasa_aplicada, 
			"plazo": plazo_maximo,
			"fecha_venta": fecha_venta,
			"estatus": 0,
			"vendedor": "oprado"
		}
		console.log(ventaData);
		let articulosData = [];
		let articulosVentaData = [];
		for (var i = 0; i < articulos.length; i++) {
			idArticulo = parseInt(articulos[i].articulo);
			cantidad = articulos[i].cantidad;
			existencia = articulos[i].existencia;
			precio = articulos[i].precio;
			importe = articulos[i].importe;
			var artData = { 
				"_id": idArticulo,
				"cantidad": existencia
			}
			//console.log(artData);
			articulosData.push(artData);
			console.log(articulosData);
			var artVentaData = { 
				"folio": maxvalue,
				"articulo": idArticulo, 
				"cantidad": cantidad, 
				"precio": precio, 
				"importe": importe, 
				"promocion": 0, 
				"estatus": 0
			}
			articulosVentaData.push(artVentaData);
		}

		dbo.collection('venta').insertOne(ventaData, function(err, collection){ 
			if (err) throw err;
			console.log("Record inserted Successfully");
			dbo.collection('venta_articulo').insertMany(articulosVentaData, function(err, collection){ 
				if (err) throw err;
				console.log("Records inserted Successfully");
				for (var i = 0; i < articulosData.length; i++) {
					dbo.collection('articulo').updateOne({ _id: articulosData[i]._id }, { $set: {cantidad: articulosData[i].cantidad} }, { upsert: true }, function(err, collection){ 
						if (err) throw err;
						console.log("Records updated Successfully");
					});
				}
			});
			//db.close();
		});
	});
	return res.redirect('/catalog/ventas');
};

// Display venta delete form on GET.
exports.venta_delete_get = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Borra Venta'
	});
};

// Handle venta delete on POST.
exports.venta_delete_post = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Borra Venta'
	});
};

// Display venta update form on GET.
exports.venta_update_get = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Actualiza Venta'
	});
};

// Handle venta update on POST.
exports.venta_update_post = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Actualiza Venta'
	});
};

