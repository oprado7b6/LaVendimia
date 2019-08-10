const express = require('express');
require("express-validator")
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator/check');
const router = express.Router();
const Registration = mongoose.model('Registration');
const path = require('path');
const auth = require('http-auth');
const basic = auth.basic({
	file: path.join(__dirname, '../users.htpasswd'),
});
router.post('/', 
	[
		body('name')
			.isLength({ min: 1 })
			.withMessage('Por favor ingrese un nombre'),
		body('email')
			.isLength({ min: 1 })
			.withMessage('Por favor ingrese su correo electronico'),
	],
	(req, res) => {
		const errors = validationResult(req);
		if (errors.isEmpty()) {
			const registration = new Registration(req.body);
			registration.save()
				.then(() => { res.send('Gracias por su registro!'); })
				.catch(() => { res.send('Lo siento! Algo salio mal.'); });
		} else {
			res.render('form', { 
				title: 'Forma de Registro',
				errors: errors.array(),
				data: req.body,
			});
		}
	}
);
router.get('/registrations', auth.connect(basic), (req, res) => {
	Registration.find().then((registrations) => {
		res.render('registrations', { title: 'Lista de registros' , registrations});
	})
	.catch(() => { res.send('Lo siento! Algo salio mal.'); });
});
module.exports = router;
