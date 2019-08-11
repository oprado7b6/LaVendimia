const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
	id: Object,
	nombre: {
		type: String,
		trim: true,
	},
	primer_apellido: {
		type: String,
		trim: true,
	},
	segundo_apellido: {
		type: String,
		trim: true,
	},
	rfc: {
		type: String,
		trim: true,
	},
	direccion: {
		type: String,
		trim: true,
	},
	telefono: Number
});

module.exports = mongoose.model('cliente', clienteSchema);

