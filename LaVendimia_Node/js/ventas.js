// Get the modal
var registroVentaModal = document.getElementById("registroVentaModal");
// Get the button that opens the modal
var registroVentaBtn = document.getElementById("btnRegistroVenta");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
//registroVentaBtn.click(function (event) {
//	registroVentaModal.modal('show')
//});
//$(document).ready(function() {
	///$("#btnRegistroVenta").on("click", function (event) {
	//$("#registroVentaModal").modal('show');
//});
$("#btnRegistroVenta").click(function (event) {
	$("#registroVentaModal").modal("show");
});

//});
//click = function() {
	//registroVentaModal.modal('show');
	//registroVentaModal.style.display = "block";
//}
// When the user clicks on <span> (x), close the modal
//span.click(function(event) {
//	registroVentaModal.modal('hide');
//});
// When the user clicks anywhere outside of the modal, close it
//window.onClick(function(event) {
//	if (event.target == registroVentaModal) {
//		registroVentaModal.style.display = "none";
//	}
//});
