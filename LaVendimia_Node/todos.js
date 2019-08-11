const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ventaControlador = require('./controllers/venta');

// Contact routes
router.route('/ventas')
    .get(ventaControlador.index)
    .post(ventaControlador.new);

//var todoItems = JSON.stringify(ventaControlador.index);
//console.log(todoItems);

var todoItems = [
			{ folio: 1 , cliente: 1, bonificacion: 0, enganche:300, total:5764.88, tasa:2.8, plazo:12, estatus:0, vendedor : 'oprado'},
			{ folio: 2 , cliente: 1, bonificacion: 0, enganche:300, total:5764.88, tasa:2.8, plazo:12, estatus:0, vendedor : 'oprado'},
			{ folio: 3 , cliente: 1, bonificacion: 0, enganche:300, total:5764.88, tasa:2.8, plazo:12, estatus:0, vendedor : 'oprado'},
			{ folio: 4 , cliente: 1, bonificacion: 0, enganche:300, total:5764.88, tasa:2.8, plazo:12, estatus:0, vendedor : 'oprado'}
	];

router.get('/', function(req, res){
	res.render('laVendimiaNav', {
		ventas : todoItems
	});
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

module.exports = router;