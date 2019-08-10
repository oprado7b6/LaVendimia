/** venta.js **/
var db = require("./db.js");
var schemas = require("./schemas.js");
var _ = require("lodash");

var Venta = function (data) {
    this.data = this.sanitize(data);
}

Venta.prototype.data = {}

Venta.prototype.get = function (folio) {
    return this.data[folio];
}

Venta.prototype.set = function (folio, value) {
    this.data[folio] = value;
}

Venta.prototype.get = function (cliente) {
    return this.data[cliente];
}

Venta.prototype.set = function (cliente, value) {
    this.data[cliente] = value;
}

Venta.prototype.get = function (vendedor) {
    return this.data[vendedor];
}

Venta.prototype.set = function (vendedor, value) {
    this.data[vendedor] = value;
}

Venta.prototype.get = function (bonificacion) {
    return this.data[bonificacion];
}

Venta.prototype.set = function (bonificacion, value) {
    this.data[bonificacion] = value;
}

Venta.prototype.get = function (enganche) {
    return this.data[enganche];
}

Venta.prototype.set = function (enganche, value) {
    this.data[enganche] = value;
}

Venta.prototype.get = function (total) {
    return this.data[total];
}

Venta.prototype.set = function (total, value) {
    this.data[total] = value;
}

Venta.prototype.get = function (tasa_financiamiento) {
    return this.data[tasa_financiamiento];
}

Venta.prototype.set = function (tasa_financiamiento, value) {
    this.data[tasa_financiamiento] = value;
}

Venta.prototype.get = function (plazo_maximo) {
    return this.data[plazo_maximo];
}

Venta.prototype.set = function (plazo_maximo, value) {
    this.data[plazo_maximo] = value;
}

Venta.prototype.get = function (fecha_venta) {
    return this.data[fecha_venta];
}

Venta.prototype.set = function (fecha_venta, value) {
    this.data[fecha_venta] = value;
}

Venta.prototype.get = function (estatus) {
    return this.data[estatus];
}

Venta.prototype.set = function (estatus, value) {
    this.data[estatus] = value;
}

Venta.prototype.sanitize = function (data) {
    data = data || {};
    schema = schemas.venta;
    return _.pick(_.defaults(data, schema), _.keys(schema)); 
}

Venta.prototype.save = function (callback) {
    var self = this;
    this.data = this.sanitize(this.data);
    db.get('venta', {folio: this.data.folio}).update(JSON.stringify(this.data)).run(function (err, result) {
        if (err) return callback(err);
        callback(null, result); 
    });
}

Venta.findById = function (folio, callback) {
    db.get('venta', {folio: folio}).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Venta(data));
    });
}

Venta.find = function (callback) {
    db.get().run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Venta(data));
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