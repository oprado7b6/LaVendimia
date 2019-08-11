function calculaEnganche(porcentajeEnganche, importe){
	enganche = (porcentajeEnganche / 100) * importe;
	return enganche;
}

function calculaEnganche(precioArticulo, tasa, plazo){
	precio = precioArticulo * (1 + (tasa * plazo) / 100);
	return precio;
}

function calculaAbonos(){
	abono = total / plazo;
	return abono;
}

function calculaAhorro(){
	ahorra = totalAdeudo – totalPagar;
	return ahorra;
}