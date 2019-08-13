// articuloController.js
var mongoose = require('mongoose');
const moment = require('moment');
const currentDate = moment(Date.now()).format('MMMM Do YYYY HH:mm:ss');

// Import articulo model
const Articulo = require('../models/articulo');

// Display list of all Articulos.
exports.articulo_list = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Lista de Art&iacute;culos'
	});
};

// Display detail page for a specific Articulo.
exports.articulo_detail = function(req, res) {
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