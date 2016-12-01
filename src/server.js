var express = require('express');
var bodyParser = require('body-parser');
var Bitly = require ('bitly');
var app = express ();



var port = 3000;

var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

app.use (bodyParser.json({type: 'application/json'}));
app.use (bodyParser.urlencoded({extended: false}));

app.get('/api', function(req, res){


	res.json(text);


	});

	//var long_url = escape(window.location.href);

	var bitly = new Bitly('7c2f4389f76a01e991ae44f1e90511b1b9b018d1');
	bitly.shorten('http://localhost:3000/api'), (function(req, res){
	var short_url = res.data.url
	//var long_url = escape(window.location.href);
	//app.use(req.baseUrl, short_url);
	res.send(short_url);
	console.log(short_url);
	//long_url = short_url;

});

app.listen(port, function(){
	console.log ('Our Server is running on port', port);


});
