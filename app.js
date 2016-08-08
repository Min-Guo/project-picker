var express = require('express');
var request = require('request');
var app = express();
var formData = {
	"queryType": "topN",
    "dataSource": "test1_hashTagRankByCountWithScore",
    "granularity": "all",
    "dimension": "hashTag",
    "threshold": 10,
    "metric": "score",
      "aggregations": [
    {
      "type": "count",
      "name": "count"
    },	{"type": "longSum", "fieldName": "score","name": "score"}
],
    "intervals": ["2016-08-05T05:00:00.000/2016-08-05T23:00:00.000"]
};


app.use(express.static('public'));

app.get('/hello', function (req, res) {
  // res.send('Hello World!');
  res.send(req.query);
});

app.get('/test_html', function (req, res) {
  res.sendfile('public/html/QueryPage.html');
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
		// res.send(JSON.stringify(body));
    res.send(body);
		console.log(error);
		console.log(body);
	});
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
