// configuracionController.js
var mongoose = require('mongoose');
const moment = require('moment');
const currentDate = moment(Date.now()).format('MMMM Do YYYY HH:mm:ss');

// Import articulo model
const Configuracion = require('../models/configuracion');

// Display detail page for a specific venta.
exports.configuracion_detail = function(req, res) {
	/*
	MongoClient.connect(dburl+":"+dbPort+"/", { useNewUrlParser: true}, function(err, db) {
		if (err) throw err;
		var dbo = db.db(dbName);
		dbo.collection("configuracion").find({}).toArray(function(err, result) {
			if (err) throw err;
			res.render('configuracion', { 
				today : currentDate, 
				titulo : 'Configuracion', 
				confituracion : result 
			});
			db.close();
		});
	});
	*/
	res.render('notImplemented', {
		today : currentDate,
		modulo : 'Configuraci&oacute;n'
	});
};
