const mongoose = require('mongoose');

const ventaArticulosSchema = new mongoose.Schema({
	id: Object,
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
module.exports = mongoose.model('venta_articulos', ventaArticulosSchema);

