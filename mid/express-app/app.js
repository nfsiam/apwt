//DECELARATION
var express = require('express');
var home = require('./controller/home');
var login = require('./controller/login');

var app = express();


//Configuration
app.set('view engine', 'ejs');

//Middleware
app.use('/home', home);
app.use('/login', login);


//SERVER STARTUP
app.listen(3000, () => {
	console.log('express server started at 3000');
});