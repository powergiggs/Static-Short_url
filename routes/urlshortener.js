/*
URL Shortener API
Kevin Smith

*/

// URL function to generate short url
function genurl_Short(){
	// alphanumeric string to generate url from
	var alphaNumeric = "ABCDEEFGHIJKLMNOPQRSTUVWXYZabcdeefghijklmnopqrstuvwxyz1234567890";
	var strLength = 6;

	var genURL = "";

	// for each to gnerate random url string
	for(var i = 0; i < strLength; i++){
		var rand = Math.round(Math.random() * alphaNumeric.length-1)
		genURL += alphaNumeric.charAt(rand);

	};


  return genURL;
}

//export url_Short function
exports.genurl_Short = genurl_Short;
