var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// Port
app.set('port', (process.env.PORT || 3000));

// Set Static path
app.use(express.static(path.join(__dirname, 'client')));

//bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Start Server
app.listen(app.get('port'), function () {
  console.log('server listening');
});
