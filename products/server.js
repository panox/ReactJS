var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var PRODUCTS_FILE = path.join(__dirname, 'products.json');

// Port
app.set('port', (process.env.PORT || 3000));

// Set Static path
app.use(express.static(path.join(__dirname, 'client')));

//bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/products', function (req, res) {
  fs.readFile();
});

// Start Server
app.listen(app.get('port'), function () {
  console.log('server listening');
});
