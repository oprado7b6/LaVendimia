const mongoose = require('mongoose');

const configuracionSchema = new mongoose.Schema({
	id: Number,
	plazo: Number,
	tasa: Number,
	enganche: Number
});

module.exports = mongoose.model('configuracion', configuracionSchema);
