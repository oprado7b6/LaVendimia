const mongoose = require('mongoose');

var cteSchema = new mongoose.Schema({ 
		_id: 'number',
		nombre: 'string',
		primer_apellido: 'string',
		segundo_apellido: 'string' 
	});
const ventaSchema = new mongoose.Schema({
	_id: Object,
	folio: Number,
	cliente: cteSchema,
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
//var venta = new Venta;

module.exports = Venta;

module.exports.get = function (callback, limit){
	Ventas.find(callback).limit(limit);
}