
<script type="text/javascript">

$(document).ready( function() {
	$(".dropdown-trigger").dropdown();
/// event on node 
	$("#ddventas").on("click", function() {
		$("#durl").load("ventas.html");
	});
	$("#btnRegistroVenta").click(function (event) {
		$("#registroVentaModal").modal("show");
	});
});

function noDisponible(modulo) {
	document.getElementById("durl").innerHTML = '<div id="nodisponible" class="nodisponible"><h1>M&oacute;dulo de ' + modulo + ' est&aacute; en proceso de liberaci&oacute;n.</h1><div>';
}

document.getElementById("ddclientes").onclick = function() { 
	noDisponible("Clientes");
}

document.getElementById("ddarticulo").onclick = function() { 
	noDisponible("Art&iacute;culo");
}

document.getElementById("ddconfiguracion").onclick = function() { 
	noDisponible("Configuraci&oacute;n");
} 
 
</script> 