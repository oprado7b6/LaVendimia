const mongoose = require('mongoose');

const accesoSchema = new mongoose.Schema({
	id: {
		type: String,
		trim: true,
	},
	modulo: Number,
	activo: Boolean,
	fecha_alta: { 
		type: Date, 
		default: Date.now 
	},
	fecha_baja: { 
		type: Date, 
		default: null
	}
});

module.exports = mongoose.model('acceso', accesoSchema);

