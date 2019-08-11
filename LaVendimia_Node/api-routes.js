// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
	res.json({
		status: 'API Its Working',
		message: 'Welcome to RESTHub crafted with love!'
	});
});

// Import contact controller
var ventaControlador = require('./controllers/venta');
// Contact routes
router.route('/ventas')
	.get(ventaControlador.index)
	.post(ventaControlador.new);
router.route('/ventas/:folio')
	.get(ventaControlador.view)
	.patch(ventaControlador.update)
	.put(ventaControlador.update)
	.delete(ventaControlador.delete);

// Export API routes
module.exports = router;