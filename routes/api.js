/*
URL Shortener API
Kevin Smith
*/

module.exports = function(express){
const router = express.Router();

  // generate status check
  router.get('/status', function(req, res){
    res.json({ healthy : true });

  });

    // generate short url
    router.post ("/url", function(req, res){
      var urls = require("../routes/urlshortener.js");
      var longUrl = req.body.url;
      var shortUrl = "";
      shortUrl = urls.genurl_Short(longUrl);
      res.send({"short_url": shortUrl});



    });


return router;
};
