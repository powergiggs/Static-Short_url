/*
URL Shortener API
Kevin Smith
*/

module.exports = function(express){
const router = express.Router();

  router.get('/status', function(req, res){
    res.json({ healthy : true });

  });


    router.post ("/url", function(req, res){
      var urls = require("../routes/urlshortener.js");
      var longUrl = req.body.url;
      var shortUrl = "";
      //req.body.shortenedURL = urls.genurl_Short(longUrl);
      shortUrl = urls.genurl_Short(longUrl);
      res.json({short_url: shortUrl});



    });


return router;
};
