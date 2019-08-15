// ventaController.js
var MongoClient = require('mongodb').MongoClient;
const dburl = process.env.DBURL;
const dbName = process.env.DBNAME;
const dbPort = process.env.DBPORT;
const { Connection } = require('../lib/Connection.js')
const mongoose = require('mongoose');
const moment = require('moment');

const currentDate = moment(Date.now()).format('MMMM Do YYYY HH:mm:ss');

//var events = require('events');
//var eventsEmitter = new events.EventEmitter();

// Import venta model
var VentaMod = require('../models/venta');
var VentaArticuloMod = require('../models/ventaArticulo');
var ArticuloMod = require('../models/articulo');
var ClienteMod = require('../models/cliente');

var Venta = mongoose.model('venta');
//var async = require('async');

/*
const myDBO = exports.MongoClient.connect(dburl+":"+dbPort+"/", { useNewUrlParser: true}, function(err, db) {
	if (err) throw err;
	var dbo = db.db(dbName);
		dbo.collection("venta").find({}).toArray(function(err, result) {
			if (err) throw err;
			//var doc = venta.cliente._id(result.cliente);
			res.render('ventaLista', { 
				today : currentDate, 
				titulo : 'Ventas Activas', 
				ventas_list : result 
			});
			//console.log(doc)
			console.log(result);
			//db.close();
		});
});
*/

exports.index = function(req, res) {
	res.render('index', {
		today : currentDate
	});
};

// Display list of all ventas.
exports.venta_list = function(req, res, next) {
	var rs_clientes;
	var rs_articulos;
	var rs_ventas;
	var rs_articulos_venta;
	var rs_configuracion;
	var rs_abonos;
	MongoClient.connect(dburl+":"+dbPort+"/", { useNewUrlParser: true}, function(err, db) {
		if (err) throw err;
		var dbo = db.db(dbName);

		dbo.collection("configuracion").find({}).toArray(function(err, resultconfig) {
			if (err) throw err;
			rs_configuracion = resultconfig;
			dbo.collection("plazo").find({plazo: { $lte: rs_configuracion[0].plazo_max} }).toArray(function(err, resultabono) {
				if (err) throw err;
				rs_abonos = resultabono;
				//console.log(rs_abonos);
			});
		});

		dbo.collection("cliente").find({}).toArray(function(err, resultclientes) {
			if (err) throw err;
			rs_clientes = resultclientes;
			//console.log(rs_clientes);
		});
		dbo.collection("articulo").find({}).toArray(function(err, resultarticulos) {
			if (err) throw err;
			rs_articulos = resultarticulos;
			//console.log(resultarticulos);
		});
		dbo.collection("venta").find({}).toArray(function(err, result) {
			if (err) throw err;
			rs_ventas = result;
			rs_ventas.forEach((venta) => {
				venta.fecha_venta = moment(venta.fecha_venta).format('YYYY/MM/DD');
				rs_clientes.forEach((cliente) => {
					if (cliente._id === venta.cliente){
						venta.cliente = cliente;
					}
				});

				dbo.collection("venta_articulo").find({ folio: venta.folio }).toArray(function(err, resultvart) {
					if (err) throw err;
					rs_articulos_venta = resultvart;
					venta["articulos"] = JSON.stringify(rs_articulos_venta);
					//console.log(venta);
					//console.log(rs_ventas);
				});
			});
			res.render('ventaLista', { 
				today : currentDate, 
				titulo : 'Ventas Activas',
				nuevoFolio : 2, 
				plazo_max : rs_configuracion[0].plazo_max,
				tasa : rs_configuracion[0].tasa,
				porcentaje_enganche : rs_configuracion[0].enganche,
				abonos : rs_abonos,
				ventas : rs_ventas,
				venta_articulos : rs_articulos_venta,
				clientes : rs_clientes,
				articulos : rs_articulos
			});
			//console.log(rs_ventas);
			//console.log(resultvart);
			db.close();
		});
	});
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

/*
	Connection.db.collection('venta').find({})
		.then(ventas => res.json({ ventas: ventas }))
		.catch(err => res.json({ error: err }));

		console.log('todoItems: ' + res.json({ ventas: ventas }));
*/
/*	Venta.findOne({}, function(err, result) {
		if (err) throw err;
		console.log(JSON.stringify(result));
	});

	Venta.find()
		.sort([['fecha', 'ascending']])
		.exec(function (err, list_ventas) {
		if (err) { 
			res.render('error', { 
				error : err
			});
		}
		//Successful, so render
		var rows = JSON.stringify(list_ventas); 
		res.render('ventaLista', { 
			today : currentDate, 
			titulo : 'Ventas Activas', 
			ventas_list : rows 
		});
		console.log('todoItems: ' + rows);

	});
*/
	/*
	var todoItems = [
  {
    _id: 5d4c73557043921f34f7f30c,
    folio: 1,
    cliente: 1,
    bonificacion: 0,
    enganche: 0,
    total: 5764.88,
    tasa: 2.8,
    plazo: 12,
    fecha_venta: 2019-08-09T07:00:00.000Z,
    estatus: 0,
    vendedor: 'oprado'
  }
]
	var todoItems = [
			{ folio: 1 , cliente: 1, bonificacion: 0, enganche: 300, total: 5764.88, tasa: 2.8, plazo: 12, estatus: 0, vendedor : 'oprado'},
			{ folio: 2 , cliente: 1, bonificacion: 0, enganche: 300, total: 5864.88, tasa: 2.8, plazo: 12, estatus: 0, vendedor : 'oprado'},
			{ folio: 3 , cliente: 1, bonificacion: 0, enganche: 300, total: 5964.88, tasa: 2.8, plazo: 12, estatus: 0, vendedor : 'oprado'},
			{ folio: 4 , cliente: 1, bonificacion: 0, enganche: 300, total: 5784.88, tasa: 2.8, plazo: 12, estatus: 0, vendedor : 'oprado'}
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