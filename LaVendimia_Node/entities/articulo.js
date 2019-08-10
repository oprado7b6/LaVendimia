/** articulo.js **/
var db = require("./db.js");
var schemas = require("./schemas.js");
var _ = require("lodash");

var Articulo = function (data) {
    this.data = this.sanitize(data);
}

Articulo.prototype.data = {}

Articulo.prototype.get = function (id) {
    return this.data[id];
}

Articulo.prototype.set = function (id, value) {
    this.data[id] = value;
}

Articulo.prototype.get = function (descripcion) {
    return this.data[descripcion];
}

Articulo.prototype.set = function (descripcion, value) {
    this.data[descripcion] = value;
}

Articulo.prototype.get = function (modelo) {
    return this.data[modelo];
}

Articulo.prototype.set = function (modelo, value) {
    this.data[modelo] = value;
}

Articulo.prototype.get = function (cantidad) {
    return this.data[cantidad];
}

Articulo.prototype.set = function (cantidad, value) {
    this.data[cantidad] = value;
}

Articulo.prototype.get = function (enganche) {
    return this.data[enganche];
}

Articulo.prototype.set = function (enganche, value) {
    this.data[enganche] = value;
}

Articulo.prototype.get = function (precio) {
    return this.data[precio];
}

Articulo.prototype.set = function (precio, value) {
    this.data[precio] = value;
}

Articulo.prototype.get = function (color) {
    return this.data[color];
}

Articulo.prototype.set = function (color, value) {
    this.data[color] = value;
}

Articulo.prototype.sanitize = function (data) {
    data = data || {};
    schema = schemas.articulo;
    return _.pick(_.defaults(data, schema), _.keys(schema)); 
}

Articulo.prototype.save = function (callback) {
    var self = this;
    this.data = this.sanitize(this.data);
    db.get('articulo', {id: this.data.id}).update(JSON.stringify(this.data)).run(function (err, result) {
        if (err) return callback(err);
        callback(null, result); 
    });
}

Articulo.findById = function (id, callback) {
    db.get('articulo', {id: id}).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Articulo(data));
    });
}

Articulo.find = function (callback) {
    db.get().run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Articulo(data));
    });
}
