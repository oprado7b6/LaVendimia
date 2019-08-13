const express = require('express');
const router = express.Router();
const app = express();
const moment = require('moment');

const currentDate = moment(Date.now()).format('MM/DD/YYYY HH:mm:ss');
//console.log('TODAY: '+currentDate);

//var ventaRoute = require('./routes/venta');
//app.use(ventaRoute);

router.get('/', function(req, res, next){
	res.render('laVendimiaIndex', {
		today : currentDate
	});
});

module.exports = router;