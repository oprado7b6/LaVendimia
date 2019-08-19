
$(document).ready(function() {

	function calculaEnganche(porcentajeEnganche, importe){
		enganche = (parseFloat(porcentajeEnganche) / 100) * importe;
		return Math.round(enganche*100)/100;
	}
	function calculaEngancheBonificacion(enganche, tasa, plazo){
		engancheBonificado = enganche * (( tasa * plazo) / 100);
		return Math.round(engancheBonificado*100)/100;
	}
	function calculaPrecio(precioArticulo, tasa, plazo){
		precio = precioArticulo * (1 + (tasa * plazo) / 100);
		return Math.round(precio*100)/100;
	}
	function calculaAbonos(total, plazo){
		abono = total / plazo;
		return Math.round(abono*100)/100;
	}
	function calculaAhorro(totalAdeudo, totalPagar){
		ahorra = totalAdeudo - totalPagar;
		return Math.round(ahorra*100)/100;
	}
	let tableVentasActivas = $('#tblVentasActivas').DataTable({
		"columns": [
			{ "name": "folio" },
			{ "name": "clienteId" },
			{ "name": "clienteNombre" },
			{ 
				"name": "total",
				 render: $.fn.dataTable.render.number( ',', '.', 2 )
			},
			{ 
				"name": "fecha",
				type: "datetime"
			},
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

	$("#btnNuevaVenta").click(function(){
		$("#registroVentaModal").show();
	});

	$('.dataTables_length').addClass('bs-select');

	$("#busca_articulo").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		
		if (value === ""){
			document.getElementById("divArticulosVenta").style.display = "none";
			document.getElementById("divRegistroVenta").style.display = "block";
		} else {
			document.getElementById("divArticulosVenta").style.display = "block";
			document.getElementById("divRegistroVenta").style.display = "none";
			document.getElementById("divClientesVenta").style.display = "none";
		}
		$("#articulosDataTable tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});

	$("#busca_cliente").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		document.getElementById("divClientesVenta").style.display = "block";
		document.getElementById("divRegistroVenta").style.display = "none";
		document.getElementById("divArticulosVenta").style.display = "none";

		$("#clientesDataTable tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});

	let arrArticulosVenta;
	let idxArticulosVenta;
	const plazo_maximo = document.getElementById("config_plazo_max");
	const porcentaje_enganche = document.getElementById("config_enganche");
	const tasa_interes = document.getElementById("config_tasa");
	let fImportes = 0.00;
	let fTotalVenta = 0.00;
	let fEnganche = 0.00;
	let fEngancheBonificado = 0.00;

	$('#tblArticulosVenta tbody').on( 'click', 'tr', function () {
		if ( $(this).hasClass('selected') ) {
			$(this).removeClass('selected');
		} else {
			tableArticulosVenta.$('tr.selected').removeClass('selected')
			$(this).addClass('selected');

			let articulo = parseInt(this.cells[0].innerHTML.trim());
			let descripcion = this.cells[2].innerHTML;
			let color = this.cells[4].innerHTML;
			let modelo = this.cells[3].innerHTML +" / " + color;
			let existencia = this.cells[1].innerHTML;
			let precio = this.cells[5].innerHTML;
			let importe = precio;
			let cantidad = 1;
			let fPrecio = calculaPrecio(parseFloat(precio.substring(1)),tasa_interes.value,plazo_maximo.value);
			let fImporte = fPrecio;
			if (parseInt(existencia) > 0 ){
				existencia = existencia-1;
				if (arrArticulosVenta == undefined){
					tableRegistroVenta.row().remove();
					arrArticulosVenta = new Array();
					let arrArticulo = JSON.parse('{"articulo": '+articulo+', "cantidad": 1, "precio":'+ fPrecio+', "importe": '+fImporte+', "existencia": '+existencia+'}');
					console.log("Primer Articulo: "+ arrArticulo);
					arrArticulosVenta.push(arrArticulo);
					idxArticulosVenta = [articulo];
					fImportes = fImporte;
					console.log(idxArticulosVenta);
					precio = "$"+fPrecio;
					importe = "$"+fImporte;
					tableRegistroVenta.row.add( [
						articulo,
						descripcion,
						modelo,
						cantidad,
						precio,
						importe
					] ).draw(false);
				} else {
					console.log(arrArticulosVenta.length);
					arti = idxArticulosVenta.includes(articulo);
					if (arti){
						console.log("Articulo has to be changed "+ arti);
						let artData = arrArticulosVenta[idxArticulosVenta.indexOf(articulo)];
						fImporte = artData.importe;
						fImportes = fImportes - fImporte;
						cantidad = artData.cantidad+1;
						fImporte =  fPrecio * cantidad;
						fImportes = fImportes + fImporte;
						precio = "$"+fPrecio;
						importe = "$"+fImporte;
						// modifica articulo existente 
						let arrArticulo = JSON.parse('{"articulo": '+articulo+', "cantidad": '+cantidad+', "precio": '+fPrecio+', "importe": '+fImporte+', "existencia": '+existencia+'}');
						arrArticulosVenta[idxArticulosVenta.indexOf(articulo)] = arrArticulo;
						tableRegistroVenta.cell({row: idxArticulosVenta.indexOf(articulo), column: 3}).data(cantidad);
						tableRegistroVenta.cell({row: idxArticulosVenta.indexOf(articulo), column: 5}).data(precio);
						tableRegistroVenta.cell({row: idxArticulosVenta.indexOf(articulo), column: 5}).data(importe);
						
					} else {
						let arrArticulo = JSON.parse('{"articulo": '+articulo+', "cantidad": 1, "precio": '+fPrecio+', "importe": '+fImporte+', "existencia": '+existencia+'}');
						console.log("otro articulo: "+ arrArticulo);
						arrArticulosVenta.push(arrArticulo);
						idxArticulosVenta.push(articulo);
						fImportes = fImportes+fImporte;
						precio = "$"+fPrecio;
						importe = "$"+fImporte;
						tableRegistroVenta.row.add([
							articulo,
							descripcion,
							modelo,
							cantidad,
							precio,
							importe
						]).draw(false);
					}
				}
				this.cells[1].innerHTML = existencia;

				fEnganche = calculaEnganche(porcentaje_enganche.value,fImporte);
				fEngancheBonificado = calculaEngancheBonificacion(fEnganche, tasa_interes.value, plazo_maximo.value);
				fTotalVenta = fImportes - fEnganche - fEngancheBonificado;
				
				document.getElementById("busca_articulo").value = "";//descripcion + " / " + modelo +" / "+ color;
				document.getElementById("articulos").value = JSON.stringify(arrArticulosVenta);
				document.getElementById("enganche").value = "$"+fEnganche;
				document.getElementById("bonificacion").value = "$"+fEngancheBonificado;
				document.getElementById("total_venta").value = "$"+Math.round(fTotalVenta*100)/100;
			}
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
			var id = this.cells[0].innerHTML;
			document.getElementById("id_cliente").value = id.trim();
			document.getElementById("busca_cliente").value = id.trim() + " - " + this.cells[1].innerHTML;
			document.getElementById("rfc").value = this.cells[2].innerHTML;
			document.getElementById("divClientesVenta").style.display = "none";
			document.getElementById("divRegistroVenta").style.display = "block";
		}
	});

});
