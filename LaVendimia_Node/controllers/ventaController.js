// ventaController.js
var mongoose = require('mongoose');
const moment = require('moment');
const currentDate = moment(Date.now()).format('MMMM Do YYYY HH:mm:ss');

var events = require('events');
var eventsEmitter = new events.EventEmitter();

// Import venta model
var Venta = require('../models/venta');
var VentaArticulo = require('../models/ventaArticulo');
var Articulo = require('../models/articulo');
var Cliente = require('../models/cliente');

var async = require('async');

exports.index = function(req, res) {
	/*var todoItems = [
			{ 'folio': 1 , 'cliente': 1, 'bonificacion': 0, 'enganche': 300, 'total': 5764.88, 'tasa': 2.8, 'plazo': 12, 'estatus': 0, 'vendedor' : 'oprado'},
			{ 'folio': 2 , 'cliente': 1, 'bonificacion': 0, 'enganche': 300, 'total': 5864.88, 'tasa': 2.8, 'plazo': 12, 'estatus': 0, 'vendedor' : 'oprado'},
			{ 'folio': 3 , 'cliente': 1, 'bonificacion': 0, 'enganche': 300, 'total': 5964.88, 'tasa': 2.8, 'plazo': 12, 'estatus': 0, 'vendedor' : 'oprado'},
			{ 'folio': 4 , 'cliente': 1, 'bonificacion': 0, 'enganche': 300, 'total': 5784.88, 'tasa': 2.8, 'plazo': 12, 'estatus': 0, 'vendedor' : 'oprado'}
	];*/
	//res.render('laVendimiaIndex', {
	res.render('index', {
		today : currentDate
	});
/*	Venta.find()
		.sort([['fecha', 'ascending']])
		.exec(function (err, list_ventas) {
		if (err) { return next(err); }
		//Successful, so render
		res.render('index', { title: 'Ventas Lista', today : currentDate, venta_list: list_ventas });
	});
*/
};

// Display list of all ventas.
exports.venta_list = function(req, res, next) {

	Venta.find()
		//.sort([['fecha', 'ascending']])
		.exec(function (err, list_ventas) {
		if (err) { return next(err); }
		//Successful, so render
		res.render('ventaLista', { 
			today : currentDate, 
			titulo : 'Ventas Activas', 
			ventas_list : list_ventas 
		});
	});
	/*var todoItems = [
			{ folio: 1 , cliente: 1, bonificacion: 0, enganche:300, total:5764.88, tasa:2.8, plazo:12, estatus:0, vendedor : 'oprado'},
			{ folio: 2 , cliente: 1, bonificacion: 0, enganche:300, total:5764.88, tasa:2.8, plazo:12, estatus:0, vendedor : 'oprado'},
			{ folio: 3 , cliente: 1, bonificacion: 0, enganche:300, total:5764.88, tasa:2.8, plazo:12, estatus:0, vendedor : 'oprado'},
			{ folio: 4 , cliente: 1, bonificacion: 0, enganche:300, total:5764.88, tasa:2.8, plazo:12, estatus:0, vendedor : 'oprado'}
	];*/
	///let ventaDocs = todoItems;
	//let ventaDocs = new Venta();
	/*
	Venta.find({}, function (err, lista_ventas) {
		if (err)
			{return next(err);}

		res.render('venta', {
			today : currentDate,
			ventas : lista_ventas
		});
		
	});
*/
	//res.send('NOT IMPLEMENTED: Venta list');
};

// Display detail page for a specific venta.
exports.venta_detail = function(req, res) {
	res.send('NOT IMPLEMENTED: Venta detail: ' + req.params.id);
};

// Display venta create form on GET.
exports.venta_create_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Venta create GET');
};

// Handle venta create on POST.
exports.venta_create_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Venta create POST');
};

// Display venta delete form on GET.
exports.venta_delete_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Venta delete GET');
};

// Handle venta delete on POST.
exports.venta_delete_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Venta delete POST');
};

// Display venta update form on GET.
exports.venta_update_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Venta update GET');
};

// Handle venta update on POST.
exports.venta_update_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Venta update POST');
};

/*
// Handle index actions
module.exports.index = function (req, res) {
	let venta = new Venta();
	Venta.get(function (err, venta) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: "Ventas retrieved successfully",
			data: venta
		});
	});
};
// Handle create venta actions
exports.new = function (req, res) {
	var venta = new Venta();
	venta.folio = req.body.folio ? req.body.folio : venta.folio;
	venta.cliente = req.body.cliente;
	venta.bonificacion = req.body.bonificacion;
	venta.enganche = req.body.enganche;
	venta.total = req.body.total;
	venta.tasa = req.body.tasa;
	venta.plazo = req.body.plazo;
	venta.estatus = req.body.estatus;
	venta.vendedor = req.body.vendedor;

	// save the venta and check for errors
	venta.save(function (err) {
		// if (err)
		//     res.json(err);
		res.json({
			message: 'Nueva venta creada!',
			data: venta
		});
	});
};
// Handle view venta info
exports.view = function (req, res) {
	Venta.findById(req.params.folio, function (err, venta) {
		if (err)
			res.send(err);
		res.json({
			message: 'Cargando detalles de Venta ...',
			data: venta
		});
	});
};
// Handle update venta info
exports.update = function (req, res) {
	Venta.findById(req.params.folio, function (err, venta) {
		if (err)
			res.send(err);
		venta.folio = req.body.folio ? req.body.folio : venta.folio;
		venta.cliente = req.body.cliente;
		venta.bonificacion = req.body.bonificacion;
		venta.enganche = req.body.enganche;
		venta.total = req.body.total;
		venta.tasa = req.body.tasa;
		venta.plazo = req.body.plazo;
		venta.estatus = req.body.estatus;
		venta.vendedor = req.body.vendedor;
		// save the venta and check for errors
		venta.save(function (err) {
			if (err)
				res.json(err);
			res.json({
				message: 'Venta Info actualizada',
				data: venta
			});
		});
	});
};
// Handle delete venta
exports.delete = function (req, res) {
	Venta.remove({
		folio: req.params.folio
	}, function (err, venta) {
		if (err)
			res.send(err);
		res.json({
			status: "success",
			message: 'Venta borrada'
		});
	});
};
*/