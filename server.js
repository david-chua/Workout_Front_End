var express = require('express');
var logger = require('morgan');


var app = express();

app.use(logger('dev'));

app.use(express.static('public'));

var port = process.env.PORT || 4000;

app.listen(port, function(){
  console.log('Listening for the sound of gains');
})
