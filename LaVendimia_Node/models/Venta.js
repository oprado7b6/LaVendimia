const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
	id: Object,
	folio: Number,
	cliente: Number,
	bonificacion:  Number,
	enganche: {
		type: Number,
		default: 0.0
	},
	total: {
		type: Number,
		default: 0.0
	},
	tasa: {
		type: Number,
		default: 0.0
	},
	plazo: Number,
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

var Venta = module.exports = mongoose.model('venta', ventaSchema);

module.exports.get = function (callback, limit){
	Venta.find(callback).limit(limit);
}