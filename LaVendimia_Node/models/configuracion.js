const mongoose = require('mongoose');

const configuracionSchema = new mongoose.Schema({
	_id: Number,
	plazo_max: Number,
	tasa: Number,
	enganche: Number
});

module.exports = mongoose.model('configuracion', configuracionSchema);
