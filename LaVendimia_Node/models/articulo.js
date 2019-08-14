const mongoose = require('mongoose');

const articuloSchema = new mongoose.Schema({
	_id: Number,
	descripcion: {
		type: String,
		trim: true,
	},
	modelo: {
		type: String,
		trim: true,
	},
	cantidad: Number,
	precio: Number,
	color: {
		type: String,
		trim: true,
	},
});

module.exports = mongoose.model('articulo', articuloSchema);
