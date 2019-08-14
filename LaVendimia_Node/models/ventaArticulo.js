const mongoose = require('mongoose');

const ventaArticuloSchema = new mongoose.Schema({
	_id: Object,
	folio: Number,
	articulo: Number,
	cantidad: Number,
	precio: {
		type: Number,
		default: 0.0
	},
	importe: {
		type: Number,
		default: 0.0
	},
	promocion: {
		type: Number,
		default: 0.0
	},
	estatus: String
});
module.exports = mongoose.model('venta_articulo', ventaArticuloSchema);

