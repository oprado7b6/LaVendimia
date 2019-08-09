var http = require('http');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
//var dbo = require('./database_connection');
const DATABASE_NAME = "LaVendimia";
const URL = "mongodb://localhost:27017/${DATABASE_NAME}";

http.createServer(function (req, res) {
	fs.readFile('LaVendimia.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);0
		res.end();
	});
	/*
	const client = new MongoClient.connect(URL, { useNewUrlParser: true });
	var dbo = null;
	try {
		// Note this breaks.
		// await client.connect({useNewUrlParser: true})
		//await client.connect();
		dbo = client.db(DATABASE_NAME);
		dbo.collection("Articulos").find({}, { projection: { _id: 1, descripcion: 1, modelo: 1, cantidad: 1, precio: 1 } }).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		//db.close();
	});	} catch (err) {
		console.log(err.stack);
	}
	//var dbo = require('./database_connection');
*/
}).listen(8080);
