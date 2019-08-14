const mongoose = require('mongoose');

const plazoSchema = new mongoose.Schema({
	_id: Number,
	plazo: Number,
	periodo: {
		type: String,
		trim: true
	},
	tasa: {
		type: Number,
		default: 0.0
	}
});

module.exports = mongoose.model('plazo', plazoSchema);

