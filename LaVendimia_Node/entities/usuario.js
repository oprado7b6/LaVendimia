/** usuario.js **/
var db = require("./db.js");
var schemas = require("./schemas.js");
var _ = require("lodash");

var Usuario = function (data) {
    this.data = this.sanitize(data);
}

Usuario.prototype.data = {}

Usuario.prototype.get = function (id) {
    return this.data[id];
}

Usuario.prototype.set = function (id, value) {
    this.data[id] = value;
}

Usuario.prototype.get = function (correo_electronico) {
    return this.data[correo_electronico];
}

Usuario.prototype.set = function (correo_electronico, value) {
    this.data[correo_electronico] = value;
}

Usuario.prototype.get = function (clave_acceso) {
    return this.data[clave_acceso];
}

Usuario.prototype.set = function (clave_acceso, value) {
    this.data[clave_acceso] = value;
}

Usuario.prototype.get = function (nombre) {
    return this.data[nombre];
}

Usuario.prototype.set = function (nombre, value) {
    this.data[nombre] = value;
}

Usuario.prototype.get = function (primer_apellido) {
    return this.data[primer_apellido];
}

Usuario.prototype.set = function (primer_apellido, value) {
    this.data[primer_apellido] = value;
}

Usuario.prototype.get = function (segundo_apellido) {
    return this.data[segundo_apellido];
}

Usuario.prototype.set = function (segundo_apellido, value) {
    this.data[segundo_apellido] = value;
}

Usuario.prototype.set = function (tipo_usuario, value) {
    this.data[tipo_usuario] = value;
}

Usuario.prototype.get = function (tipo_usuario) {
    return this.data[tipo_usuario];
}

Usuario.prototype.set = function (fecha_registro, value) {
    this.data[fecha_registro] = value;
}

Usuario.prototype.get = function (fecha_registro) {
    return this.data[fecha_registro];
}

Usuario.prototype.get = function (activo) {
    return this.data[activo];
}

Usuario.prototype.set = function (activo, value) {
    this.data[activo] = value;
}

Usuario.prototype.sanitize = function (data) {
    data = data || {};
    schema = schemas.usuario;
    return _.pick(_.defaults(data, schema), _.keys(schema)); 
}

Usuario.prototype.cambiarNombre = function (nombre) {
    this.data.nombre = nombre;
}

Usuario.prototype.save = function (callback) {
    var self = this;
    this.data = this.sanitize(this.data);
    db.get('Usuario', {id: this.data.id}).update(JSON.stringify(this.data)).run(function (err, result) {
        if (err) return callback(err);
        callback(null, result); 
    });
}

Usuario.findById = function (id, callback) {
    db.get('Usuario', {id: id}).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Usuario(data));
    });
}

module.exports = Usuario;
