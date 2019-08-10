const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
	id: ObjectId,
	folio: Number,
	cliente: Number,
	bonificacion: double,
	enganche: double,
	total: double,
	tasa_financiamiento: double,
	plazo_maximo: Number,
	fecha: {
		type: Date,
		default: Date.now
	},
	estatus: Number,
	vendedor: {
		type: String,
		trim: true,
	}
});

module.exports = mongoose.model('venta', ventaSchema);

