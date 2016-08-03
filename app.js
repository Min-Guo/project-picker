var express = require('express');
var request = require('request');
var app = express();
var formData = {
	queryType : "topN",
	dataSource : "tweet",
	granularity : "all",
	dimension : "hashTag",
	threshold : 5,
	metric : "count",
	aggregations : [{
		type : "count",
		name : "count"
	}],
	intervals: ["2016-07-31T17:00:00.000/2016-08-01T18:00:00.000"]
};


app.use(express.static('public'));

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});


app.get('/query', function (req, res) {
	request({
  uri: "http://ec2-54-83-35-212.compute-1.amazonaws.com:8082/druid/v2/?pretty",
  method: "POST",
  json: true,
    headers: {
        "content-type": "application/json",
    },
    body: formData
  // form: formData
}, function(error, response, body) {
	res.send(JSON.stringify(body));
	console.log(error);
  console.log(body);
});

});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
