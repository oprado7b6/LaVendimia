const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
	id: {
		type: String,
		trim: true,
	},
	clave_acceso: {
		type: String,
		trim: true,
	},
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
    tipo_usuario: Number,
	activo: {
		type: Boolean,
		default: true
	},
	fecha_registro: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('usuario', usuarioSchema);

