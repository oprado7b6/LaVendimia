/** venta.js **/
var db = require("./db.js");
var schemas = require("./schemas.js");
var _ = require("lodash");

var Plazo = function (data) {
    this.data = this.sanitize(data);
}

Plazo.prototype.data = {}

Plazo.prototype.get = function (id) {
    return this.data[id];
}

Plazo.prototype.set = function (id, value) {
    this.data[id] = value;
}

Plazo.prototype.get = function (plazo) {
    return this.data[plazo];
}

Plazo.prototype.set = function (plazo, value) {
    this.data[plazo] = value;
}

Plazo.prototype.get = function (periodo) {
    return this.data[periodo];
}

Plazo.prototype.set = function (periodo, value) {
    this.data[periodo] = value;
}

Plazo.prototype.get = function (tasa) {
    return this.data[tasa];
}

Plazo.prototype.set = function (tasa, value) {
    this.data[tasa] = value;
}

Plazo.prototype.sanitize = function (data) {
    data = data || {};
    schema = schemas.plazo;
    return _.pick(_.defaults(data, schema), _.keys(schema)); 
}

Plazo.prototype.save = function (callback) {
    var self = this;
    this.data = this.sanitize(this.data);
    db.get('plazo', {id: this.data.id}).update(JSON.stringify(this.data)).run(function (err, result) {
        if (err) return callback(err);
        callback(null, result); 
    });
}

Plazo.findById = function (id, callback) {
    db.get('plazo', {id: id}).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Plazo(data));
    });
}
Plazo.findByMax = function (plazo, callback) {
    db.get('plazo', {plazo: plazo}).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Plazo(data));
    });
}

Plazo.find = function (callback) {
    db.get().run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Plazo(data));
    });
}
