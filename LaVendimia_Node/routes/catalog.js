var express = require('express');
var router = express.Router();

// Require controller modules.
var articulo_controller = require('../controllers/articuloController');
var cliente_controller = require('../controllers/clienteController');
var configuracion_controller = require('../controllers/configuracionController');
var venta_controller = require('../controllers/ventaController');
var venta_articulo_controller = require('../controllers/ventaArticuloController');

/// ARTICULO ROUTES ///

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/articulo/create', articulo_controller.articulo_create_get);

// POST request for creating Book.
router.post('/articulo/create', articulo_controller.articulo_create_post);

// GET request to delete Book.
router.get('/articulo/:id/delete', articulo_controller.articulo_delete_get);

// POST request to delete Book.
router.post('/articulo/:id/delete', articulo_controller.articulo_delete_post);

// GET request to update Book.
router.get('/articulo/:id/update', articulo_controller.articulo_update_get);

// POST request to update Book.
router.post('/articulo/:id/update', articulo_controller.articulo_update_post);

// GET request for one Book.
router.get('/articulo/:id', articulo_controller.articulo_detail);

// GET request for list of all Book items.
router.get('/articulos', articulo_controller.articulo_list);

/// CLIENTE ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/cliente/create', cliente_controller.cliente_create_get);

// POST request for creating Author.
router.post('/cliente/create', cliente_controller.cliente_create_post);

// GET request to delete Author.
router.get('/cliente/:id/delete', cliente_controller.cliente_delete_get);

// POST request to delete Author.
router.post('/cliente/:id/delete', cliente_controller.cliente_delete_post);

// GET request to update Author.
router.get('/cliente/:id/update', cliente_controller.cliente_update_get);

// POST request to update Author.
router.post('/cliente/:id/update', cliente_controller.cliente_update_post);

// GET request for one Author.
router.get('/cliente/:id', cliente_controller.cliente_detail);

// GET request for list of all Authors.
router.get('/clientes', cliente_controller.cliente_list);

/// VENTA ROUTES ///

// GET catalog home page.
router.get('/', venta_controller.index);

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/venta/create', venta_controller.venta_create_get);

//POST request for creating Genre.
router.post('/venta/create', venta_controller.venta_create_post);

// GET request to delete Genre.
router.get('/venta/:id/delete', venta_controller.venta_delete_get);

// POST request to delete Genre.
router.post('/venta/:id/delete', venta_controller.venta_delete_post);

// GET request to update Genre.
router.get('/venta/:id/update', venta_controller.venta_update_get);

// POST request to update Genre.
router.post('/venta/:id/update', venta_controller.venta_update_post);

// GET request for one Genre.
router.get('/venta/:id', venta_controller.venta_detail);

// GET request for list of all Genre.
router.get('/ventas', venta_controller.venta_list);

/// VENTA ARTICULO ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/ventaArticulo/create', venta_articulo_controller.venta_articulo_create_get);

//POST request for creating Genre.
router.post('/ventaArticulo/create', venta_articulo_controller.venta_articulo_create_post);

// GET request to delete Genre.
router.get('/ventaArticulo/:id/delete', venta_articulo_controller.venta_articulo_delete_get);

// POST request to delete Genre.
router.post('/ventaArticulo/:id/delete', venta_articulo_controller.venta_articulo_delete_post);

// GET request to update Genre.
router.get('/ventaArticulo/:id/update', venta_articulo_controller.venta_articulo_update_get);

// POST request to update Genre.
router.post('/ventaArticulo/:id/update', venta_articulo_controller.venta_articulo_update_post);

// GET request for one Genre.
router.get('/ventaArticulo/:id', venta_articulo_controller.venta_articulo_detail);

// GET request for list of all Genre.
router.get('/ventaArticulos', venta_articulo_controller.venta_articulo_list);

/// CONFIGURACION ROUTES ///

// GET request for one BookInstance.
router.get('/configuracion', configuracion_controller.configuracion_detail);

module.exports = router;