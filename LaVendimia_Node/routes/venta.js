const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

//const Venta = require('../models/venta');

//let myModel = require('../models');  // a global object
//
//var ventaModel = mongoose.model('venta');

var calculos = require('../js/calculos');

console.log('Enganche: '+calculos.enganche(10, 2385.23));
console.log('Abono: '+calculos.abono(5764.88, 12));
console.log('Precio: '+calculos.precio(5764.88, 2.8, 12));

//var ventaEntity = mongoose.entity('venta');
//const ventaControlador = require('../controllers/ventaController');
//const ventaSchema = require('../models/venta');

/*
// Home page route.
router.get('/', function (req, res) {
  res.send('Wiki home page');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Contact routes
//var ventaObject = router.route('/venta').get(ventaControlador.index).post(ventaControlador.new);
//var ventaItems = JSON.stringify(ventaObject);
//console.log(ventaItems);

//const MyModel = mongoose.model('venta', ventaSchema({ folio: Number }));
//MyModel.inspect(); // 'Model { Test }'
//console.log(MyModel); // Prints 'Model { Test }'var MyVenta = mongoose.model('venta', ventaSchema);

//VentasModel.find(callback).limit(limit);
/*
function createWebpage (req, res) {
	// Let's find all the documents
	Venta.find = function (callback) {
    db.get().run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Venta(data));
    });
}.find({}).exec(function(err, result) {
		if (!err) {
			res.write(html1 + JSON.stringify(result, undefined, 2) +  html2 + result.length + html3);
			// Let's see if there are any senior citizens (older than 64) with the last name Doe using the query constructor
			
			var query = ventaModel.find({}); // (ok in this example, it's all entries)
			query.where('estatus').lte(0);
			query.exec(function(err, result) {
				if (!err) {
					res.end(html4 + JSON.stringify(result, undefined, 2) + html5 + result.length + html6);
				} else {
					res.end('Error in second query. ' + err)
				}
			});
		} else {
			res.end('Error in first query. ' + err)
		};
	});
}
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
var todoItems = [
			{ folio: 1 , cliente: 1, bonificacion: 0, enganche:300, total:5764.88, tasa:2.8, plazo:12, estatus:0, vendedor : 'oprado'},
			{ folio: 2 , cliente: 1, bonificacion: 0, enganche:300, total:5764.88, tasa:2.8, plazo:12, estatus:0, vendedor : 'oprado'},
			{ folio: 3 , cliente: 1, bonificacion: 0, enganche:300, total:5764.88, tasa:2.8, plazo:12, estatus:0, vendedor : 'oprado'},
			{ folio: 4 , cliente: 1, bonificacion: 0, enganche:300, total:5764.88, tasa:2.8, plazo:12, estatus:0, vendedor : 'oprado'}
	];

router.get('/', function(req, res){
	ventaModel.find = function (callback) {
		db.get().run(function (err, data) {
			if (err) return callback(err);
			callback(null, new ventaModel(data));
		});
		//var todoItems = JSON.stringify(data);
		res.render('laVendimiaNav', {
			ventas : todoItems
		});
	}
});

router.post('/add', function(req, res){
	var newItem = req.body.newItem;
	todoItems.push({
		folio: todoItems.length+1 , 
		cliente: 1, 
		bonificacion: 0, 
		enganche: 300, 
		total: 5864.88, 
		tasa: 2.8, 
		plazo: 12, 
		estatus: 0, 
		vendedor: 'oprado'
	});
	res.redirect('/');
});
*/
module.exports = router;