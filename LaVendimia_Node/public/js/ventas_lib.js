
$(document).ready(function() {

	let tableVentasActivas = $('#tblVentasActivas').DataTable({
		"columns": [
			{ "name": "folio" },
			{ "name": "clienteId" },
			{ "name": "clienteNombre" },
			{ "name": "total" },
			{ "name": "fecha" },
			{ "name": "estatus" }
		],
		"autoWidth": true
	});
	let tableRegistroVenta = $('#tblRegistroVenta').DataTable({
		"columns": [
			{ "name": "id" },
			{ "name": "descripcion" },
			{ "name": "modelo" },
			{ "name": "cantidad" },
			{ "name": "precio" },
			{ "name": "importe" }
		],
		"autoWidth": true,
		"searching": false
	});

	let tableArticulosVenta = $('#tblArticulosVenta').DataTable({
		"columns": [
			{ "name": "id" },
			{ "name": "existencia" },
			{ "name": "descripcion" },
			{ "name": "modelo" },
			{ "name": "color" },
			{ "name": "precio" }
		],
		"autoWidth": true,
		"searching": false
	});
	let tableClientesVenta = $('#tblClientesVenta').DataTable({
		"columns": [
			{ "name": "id" },
			{ "name": "nombre" },
			{ "name": "rfc" },
			{ "name": "tefefono" }
		],
		"autoWidth": true,
		"searching": false
	});

	$("#btnRegistroVenta").click(function(){
		$("#registroVentaModal").show();
	});
	$('.dataTables_length').addClass('bs-select');

	function ocultaTablaVentas(){
		/** put code here**/

	}

	$("#busca_articulo").on("keyup", function() {
		document.getElementById("divArticulosVenta").style.display = "block";
		document.getElementById("divRegistroVenta").style.display = "none";
		document.getElementById("divClientesVenta").style.display = "none";
		var value = $(this).val().toLowerCase();
		$("#articulosDataTable tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});

	$("#busca_cliente").on("keyup", function() {
		document.getElementById("divClientesVenta").style.display = "block";
		document.getElementById("divRegistroVenta").style.display = "none";
		document.getElementById("divArticulosVenta").style.display = "none";

		var value = $(this).val().toLowerCase();
		$("#clientesDataTable tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});

	$('#tblArticulosVenta tbody').on( 'click', 'tr', function () {
		if ( $(this).hasClass('selected') ) {
			$(this).removeClass('selected');
		} else {
			tableArticulosVenta.$('tr.selected').removeClass('selected')
			$(this).addClass('selected');
			document.getElementById("id_articulo").value = this.cells[0].innerHTML;
			document.getElementById("busca_articulo").value = this.cells[2].innerHTML +' / '+this.cells[3].innerHTML+' / '+this.cells[4].innerHTML;
			document.getElementById("existencia").value = this.cells[1].innerHTML;
			document.getElementById("divArticulosVenta").style.display = "none";
			document.getElementById("divRegistroVenta").style.display = "block";
		}
	});

	$('#tblClientesVenta tbody').on( 'click', 'tr', function () {
		if ( $(this).hasClass('selected') ) {
			$(this).removeClass('selected');
		} else {
			tableClientesVenta.$('tr.selected').removeClass('selected')
			$(this).addClass('selected');
			
			document.getElementById("id_cliente").value = this.cells[0].innerHTML;
			document.getElementById("busca_cliente").value = this.cells[0].innerHTML +' - '+this.cells[1].innerHTML;
			document.getElementById("rfc").value = this.cells[2].innerHTML;
			document.getElementById("divClientesVenta").style.display = "none";
			document.getElementById("divRegistroVenta").style.display = "block";
		}
	});

});
