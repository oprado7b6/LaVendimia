var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res){
    res.render('index.html',{email:data.email,password:data.password});
});