// configuracionController.js
var MongoClient = require('mongodb').MongoClient;
const dburl = process.env.DBURL;
const dbName = process.env.DBNAME;
const dbPort = process.env.DBPORT;
const { Connection } = require('../lib/Connection.js')

const mongoose = require('mongoose');
const moment = require('moment');
const currentDate = moment(Date.now()).format('MMMM Do YYYY HH:mm:ss');

// Import articulo model
const Configuracion = require('../models/configuracion');

// Display detail page for a specific venta.
exports.configuracion_detail = function(req, res) {
	
	MongoClient.connect(dburl+":"+dbPort+"/", { useNewUrlParser: true}, function(err, db) {
		if (err) throw err;
		var dbo = db.db(dbName);
		dbo.collection("configuracion").find({}).toArray(function(err, result) {
			if (err) throw err;
			res.render('configuracion', { 
				today : currentDate, 
				titulo : 'Configuracion General', 
				configuracion : result 
			});
			db.close();
		});
	});
};
