/** cliente.js **/
var db = require("./db.js");
var schemas = require("./schemas.js");
var _ = require("lodash");

var Cliente = function (data) {
    this.data = this.sanitize(data);
}

Cliente.prototype.data = {}

Cliente.prototype.get = function (id) {
    return this.data[id];
}

Cliente.prototype.set = function (id, value) {
    this.data[id] = value;
}

Cliente.prototype.get = function (nombre) {
    return this.data[nombre];
}

Cliente.prototype.set = function (nombre, value) {
    this.data[nombre] = value;
}

Cliente.prototype.get = function (primer_apellido) {
    return this.data[primer_apellido];
}

Cliente.prototype.set = function (primer_apellido, value) {
    this.data[primer_apellido] = value;
}

Cliente.prototype.get = function (segundo_apellido) {
    return this.data[segundo_apellido];
}

Cliente.prototype.set = function (segundo_apellido, value) {
    this.data[segundo_apellido] = value;
}

Cliente.prototype.get = function (rfc) {
    return this.data[rfc];
}

Cliente.prototype.set = function (rfc, value) {
    this.data[rfc] = value;
}

Cliente.prototype.get = function (direccion) {
    return this.data[direccion];
}

Cliente.prototype.set = function (direccion, value) {
    this.data[direccion] = value;
}

Cliente.prototype.get = function (telefono) {
    return this.data[telefono];
}

Cliente.prototype.set = function (telefono, value) {
    this.data[telefono] = value;
}

Cliente.prototype.sanitize = function (data) {
    data = data || {};
    schema = schemas.cliente;
    return _.pick(_.defaults(data, schema), _.keys(schema)); 
}

Cliente.prototype.save = function (callback) {
    var self = this;
    this.data = this.sanitize(this.data);
    db.get('cliente', {id: this.data.id}).update(JSON.stringify(this.data)).run(function (err, result) {
        if (err) return callback(err);
        callback(null, result); 
    });
}

Cliente.findById = function (id, callback) {
    db.get('cliente', {id: id}).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Cliente(data));
    });
}

Cliente.find = function (callback) {
    db.get().run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Cliente(data));
    });
}
