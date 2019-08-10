const mongoose = require('mongoose');

const ventasSchema = new mongoose.Schema({
	folio: {
		type: Integer,
	},
	cliente: {
		type: Integer,

	},
	descripcion: {
		type: Integer,
	},
});
module.exports = mongoose.model('Registration', registrationSchema);

