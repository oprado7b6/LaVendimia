$(document).ready(function() {
	let tableArticulos = $('#tblArticulos').DataTable({
		"columns": [
			{ "name": "id" },
			{ "name": "descripcion" },
			{ "name": "exixtencia" },
			{ "name": "modelo" },
			{ "name": "color" },
			{ "name": "precio" }
		],
		"autoWidth": true
	});
	let tableClientes = $('#tblClientes').DataTable({
		"columns": [
			{ "name": "id" },
			{ "name": "nombre" },
			{ "name": "rfc" },
			{ "name": "telefono" },
			{ "name": "correo" },
			{ "name": "direccion" }
		],
		"autoWidth": true
	});
	
	$('.dataTables_length').addClass('bs-select');

});