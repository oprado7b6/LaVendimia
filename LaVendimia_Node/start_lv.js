require('dotenv').config();
const app = require('./app');
var port = process.env.PORT || 1974;
const server = app.listen(port, function() {
	console.log('Now is running on port ' + port);
});
