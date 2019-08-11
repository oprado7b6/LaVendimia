/** venta.js **/
var db = require("./db.js");
var schemas = require("./schemas.js");
var _ = require("lodash");

var Configuracion = function (data) {
    this.data = this.sanitize(data);
}

Configuracion.prototype.data = {}

Configuracion.prototype.get = function (id) {
    return this.data[id];
}

Configuracion.prototype.set = function (id, value) {
    this.data[id] = value;
}

Configuracion.prototype.get = function (plazo) {
    return this.data[plazo];
}

Configuracion.prototype.set = function (plazo, value) {
    this.data[plazo] = value;
}

Configuracion.prototype.get = function (tasa) {
    return this.data[tasa];
}

Configuracion.prototype.set = function (tasa, value) {
    this.data[tasa] = value;
}

Configuracion.prototype.get = function (enganche) {
    return this.data[enganche];
}

Configuracion.prototype.set = function (enganche, value) {
    this.data[enganche] = value;
}

Configuracion.prototype.sanitize = function (data) {
    data = data || {};
    schema = schemas.configutacion;
    return _.pick(_.defaults(data, schema), _.keys(schema)); 
}

Configuracion.prototype.save = function (callback) {
    var self = this;
    this.data = this.sanitize(this.data);
    db.get('configutacion', {id: this.data.id}).update(JSON.stringify(this.data)).run(function (err, result) {
        if (err) return callback(err);
        callback(null, result); 
    });
}

Configuracion.findById = function (id, callback) {
    db.get('configutacion', {id: id}).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Configuracion(data));
    });
}

Configuracion.find = function (callback) {
    db.get().run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Configuracion(data));
    });
}