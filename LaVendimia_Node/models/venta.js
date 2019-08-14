const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
	_id: Object,
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
	}//,
	//articulos : [{ type: number, ref: 'Articulo' }]
});
//const Articulo = mongoose.model('articulo', articuloSchema);
const Venta = mongoose.model('venta', ventaSchema);

module.exports = Venta;

module.exports.get = function (callback, limit){
	Ventas.find(callback).limit(limit);
}