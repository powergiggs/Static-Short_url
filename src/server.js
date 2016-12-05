var express = require("express"); // declare express
var bodyParser = require("body-parser"); // declare bodyParser
var Bitly = require ("bitly");
var app = express (); // declare app


var port = 3000;

// json object store store as variable
var text = { "Cars" : [
{ "make":"Honda" , "model":"Civic", "year": "2013" },
{ "make":"VW" , "model":"Jetta", "year": "2017" },
{ "make":"Nissan" , "model":"Rogue", "year": "2016" } ]};

app.use (bodyParser.json({type: "application/json"}));
app.use (bodyParser.urlencoded({extended: false}));

// url header Get
app.get("/api/cars", function(req, res){

res.json(text);


	});


// url header Post
app.post("/api/shorturl", function (req, res){
	var longUrl = req.originalUrl;// fetch original url

	// alphanumeric string to generate url from
	var anStrings = "ABCDEEFGHIJKLMNOPQRSTUVWXYZabcdeefghijklmnopqrstuvwxyz1234567890";
	var strLength = 6;

	var genUrl = "";

	// for each to gnerate random url string
	for(var i = 0; i < strLength; i++){
		var rand = Math.round(Math.random() * anStrings.length-1)
		//genUrl += sStrings.charAt(Math.random() * sStrings.length);
		genUrl += anStrings.charAt(rand);
	}

//
	var url = {
		origURL: longUrl,
		shortUrl: "http://"+genUrl

	}

	res.json(url);
	//console.log(url);

});

app.listen(port, function(){
	//console.log ("Our Server is running on port", port);


});
