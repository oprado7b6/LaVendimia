var http = require('http');
var fs = require('fs');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const DATABASE_NAME = "LaVendimia";
const URL = "mongodb://localhost:27017/${DATABASE_NAME}";
const client = new MongoClient(URL, { useNewUrlParser: true });

client.connect(function(err, client) {
	assert.equal(null, err);
	console.log("Connected correctly to server");
	const db = client.db(DATABASE_NAME);
	ventasActivas(db, function() {
		client.close();
	});
});

http.createServer(function (req, res) {
	let rawdata = fs.readFileSync('ventasActivas.json');
	let venta = JSON.parse(rawdata);
	//console.log(venta);
	fs.readFile('LaVendimia.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		console.log(venta);
		res.end();
	});
}).listen(8080);

function ventasActivas(db, callback) {
	db.collection('Ventas').aggregate([
		{ $lookup:
			{
			from: 'VentasDetalle',
			localField: 'folio',
			foreignField: 'folio',
			as: 'articulos'
			}
		}
	]).toArray(function(err, res) {
		if (err) throw err;
		var jsonObj = JSON.parse(JSON.stringify(res));
		var jsonContent = JSON.stringify(jsonObj);
		//console.log(jsonObj);
		//console.log(jsonContent);
		fs.writeFile("ventasActivas.json", jsonContent, 'utf8', function (err) {
			if (err) {
				console.log("An error occured while writing JSON Object to File.");
				return console.log(err);
			}
			console.log("JSON file has been saved.");
		});
	});
};
