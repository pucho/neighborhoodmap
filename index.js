var express = require('express');
var app = express();
var path = require('path');
var request = require('request');

app.use('/', express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/breweries', function(req, res){
  request('https://api.brewerydb.com/v2/locations?locality=Chicago&key=cbf0ce3c607c3b7ddcb88588151b9891&format=json',
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        
      }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
