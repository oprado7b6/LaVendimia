const mongoose = require('mongoose');

const ventaArticulosSchema = new mongoose.Schema({
	id: ObjectId,
	folio: Number,
	articulo: Number,
	cantidad: Number,
	precio: double,
	importe: double,
	promocion: double,
	estatus: String
});
module.exports = mongoose.model('venta_articulos', ventaArticulosSchema);

