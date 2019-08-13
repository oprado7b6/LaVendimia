// ventaController.js
var mongoose = require('mongoose');

// Import venta model
const VentaArticulo = require('../models/ventaArticulo');

// Display list of all ventas.
exports.venta_articulo_list = function(req, res) {
	res.send('NOT IMPLEMENTED: Venta list');
};

// Display detail page for a specific venta.
exports.venta_articulo_detail = function(req, res) {
	res.send('NOT IMPLEMENTED: Venta detail: ' + req.params.id);
};

// Display venta create form on GET.
exports.venta_articulo_create_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Venta create GET');
};

// Handle venta create on POST.
exports.venta_articulo_create_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Venta create POST');
};

// Display venta delete form on GET.
exports.venta_articulo_delete_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Venta delete GET');
};

// Handle venta delete on POST.
exports.venta_articulo_delete_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Venta delete POST');
};

// Display venta update form on GET.
exports.venta_articulo_update_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Venta update GET');
};

// Handle venta update on POST.
exports.venta_articulo_update_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Venta update POST');
};
