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
      req.body.shortenedURL = urls.genurl_Short();
      res.json({shortened_url: req.body.shortenedURL});



    });


return router;
};
