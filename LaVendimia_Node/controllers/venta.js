// ventaController.js
var mongoose = require('mongoose');

// Import venta model
Venta = require('./Venta');
// Handle index actions
exports.index = function (req, res) {
	Venta.get(function (err, contacts) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: "Contacts retrieved successfully",
			data: contacts
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