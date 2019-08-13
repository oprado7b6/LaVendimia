// configuracionController.js
var mongoose = require('mongoose');
const moment = require('moment');
const currentDate = moment(Date.now()).format('MMMM Do YYYY HH:mm:ss');

// Import articulo model
const Configuracion = require('../models/configuracion');

// Display detail page for a specific venta.
exports.configuracion_detail = function(req, res) {
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Configuraci&oacute;n'
	});
};
