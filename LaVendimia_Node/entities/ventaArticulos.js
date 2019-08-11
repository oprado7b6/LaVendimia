/** venta.js **/
var db = require("./db.js");
var schemas = require("./schemas.js");
var _ = require("lodash");

var VentaArticulos = function (data) {
    this.data = this.sanitize(data);
}

VentaArticulos.prototype.data = {}

VentaArticulos.prototype.get = function (id) {
    return this.data[id];
}

VentaArticulos.prototype.set = function (id, value) {
    this.data[id] = value;
}

VentaArticulos.prototype.get = function (folio) {
    return this.data[folio];
}

VentaArticulos.prototype.set = function (folio, value) {
    this.data[folio] = value;
}

VentaArticulos.prototype.get = function (articulo) {
    return this.data[articulo];
}

VentaArticulos.prototype.set = function (articulo, value) {
    this.data[articulo] = value;
}

VentaArticulos.prototype.get = function (cantidad) {
    return this.data[cantidad];
}

VentaArticulos.prototype.set = function (cantidad, value) {
    this.data[cantidad] = value;
}

VentaArticulos.prototype.get = function (precio) {
    return this.data[precio];
}

VentaArticulos.prototype.set = function (precio, value) {
    this.data[precio] = value;
}

VentaArticulos.prototype.get = function (importe) {
    return this.data[importe];
}

VentaArticulos.prototype.set = function (importe, value) {
    this.data[importe] = value;
}

VentaArticulos.prototype.get = function (promocion) {
    return this.data[promocion];
}

VentaArticulos.prototype.set = function (promocion, value) {
    this.data[promocion] = value;
}

VentaArticulos.prototype.get = function (estatus) {
    return this.data[estatus];
}

VentaArticulos.prototype.set = function (estatus, value) {
    this.data[estatus] = value;
}

VentaArticulos.prototype.sanitize = function (data) {
    data = data || {};
    schema = schemas.venta_articulos;
    return _.pick(_.defaults(data, schema), _.keys(schema)); 
}

VentaArticulos.prototype.save = function (callback) {
    var self = this;
    this.data = this.sanitize(this.data);
    db.get('venta_articulos', {folio: this.data.folio}).update(JSON.stringify(this.data)).run(function (err, result) {
        if (err) return callback(err);
        callback(null, result); 
    });
}

VentaArticulos.findById = function (folio, callback) {
    db.get('venta_articulos', {folio: folio}).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new VentaArticulos(data));
    });
}

VentaArticulos.find = function (callback) {
    db.get().run(function (err, data) {
        if (err) return callback(err);
        callback(null, new VentaArticulos(data));
    });
}

/*
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
		fs.writeFile("json/ventasActivas.json", jsonContent, 'utf8', function (err) {
			if (err) {
				console.log("An error occured while writing JSON Object to File.");
				return console.log(err);
			}
			console.log("JSON file has been saved.");
		});
	});
};
*/