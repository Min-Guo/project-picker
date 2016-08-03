var express = require('express');
var request = require('request');
var app = express();


app.use(express.static('public'));

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});


app.get('/query', function (req, res) {
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    res.send(body) // Show the HTML for the Google homepage.
  }
});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
