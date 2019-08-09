var http = require('http');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;

const DATABASE_NAME = "LaVendimia";
const URL = "mongodb://localhost:27017/${DATABASE_NAME}";

http.createServer(function (req, res) {
	fs.readFile('laVendimiaNav.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
	/*
	MongoClient.connect(URL, { useNewUrlParser: true }, function(err, db) {
		if (err) throw err;
		var dbo = db.db(DATABASE_NAME);
		dbo.collection("Articulos").find({}, { projection: { _id: 1, descripcion: 1, modelo: 1, cantidad: 1, precio: 1, color: 1 } }).toArray(function(err, result) {
			if (err)throw err;
			//callback.json(result);
			console.log(result);
			
			db.close();
		});
	});*/
}).listen(8080);
