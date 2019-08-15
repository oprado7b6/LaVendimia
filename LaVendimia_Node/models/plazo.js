const mongoose = require('mongoose');

const plazoSchema = new mongoose.Schema({
	_id: Number,
	plazo: Number,
	periodo: {
		type: String,
		trim: true
	}
});

module.exports = mongoose.model('plazo', plazoSchema);
