var schemas = {
	acceso: {
		id: null,
		modulo: null,
		activo: null,
		fecha_alta: null,
		fecha_baja: null
	}
	articulo: {
		id: null,
		descripcion: null,
		modelo: null,
		cantidad: null,
		precio: null,
		color: null
	}
	cliente: {
		id: null,
		nombre: null,
		primer_apellido: null,
		segundo_apellido: null,
		rfc: null,
		direccion: null,
		telefono: null
	}
	configuracion: {
		id: null,
		plazo: null,
		periodo: null
	}
	plazo: {
		id: null,
		plazo: null,
		periodo: null,
	}
	usuario: {
		id: null,
		clave_acceso: null,
		nombre: null,
		primer_apellido: null,
		segundo_apellido: null,
		tipo_usuario: null,
		activo: null,
		fecha_registro: null
	}
	venta: {
		id: null,
		folio: null,
		cliente: null,
		bonificacion: null,
		enganche: null,
		total: null,
		tasa: null,
		plazo: null,
		fecha: null,
		estatus: null,
		vendedor: null
	}
	venta_articulos: {
		id: null,
		folio: null,
		articulo: null,
		cantidad: null,
		precio: null,
		importe: null,
		promocion: null,
		estatus: null
	}
}

module.exports = schemas;
