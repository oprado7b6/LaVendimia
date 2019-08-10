const mongoose = require('mongoose');

const plazoSchema = new mongoose.Schema({
	id: Number,
	plazo: Number,
	periodo: {
		type: String,
		trim: true
	},
	tasa: {
		type: double,
		default: 0.0
	}
});

module.exports = mongoose.model('plazo', plazoSchema);

