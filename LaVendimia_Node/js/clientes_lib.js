//import $ from 'jquery';

//import 'datatables.net';
//import 'datatables.net-dt/css/jquery.dataTables.css';
//window.$ = require('jquery');
//var dt = require('datatables.net');
//window.$.DataTable = dt;

var options = {
	type: "html",
	htmlSelector: "#btnRegistroVenta",
};
/* 
$("button.open-popup-link").on("click", function(e) {
	e.preventDefault();
	$(this).simplePopup(options);
});
*/

$(document).ready(function() {
	$('#tblVentasActivas').DataTable();
	$('#tblArticulos').DataTable();

	$('.dataTables_length').addClass('bs-select');

	$("#btnRegistroVenta").click(function(){
		$("#registroVentaModal").show();
	});

	$("#desc_articulo").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#listaArticulos li").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
/*
	var table = $('#tblVentasActivas').DataTable();
 
	$('#tblVentasActivas tbody').on( 'click', 'tr', function () {
		if ( $(this).hasClass('selected') ) {
			$(this).removeClass('selected');
		} else {
			table.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
		}
	} );
 
	$('#button').click( function () {
		table.row('.selected').remove().draw( false );
	} );
	*/
});
