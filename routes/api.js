/*
URL Shortener API
Kevin Smith
*/

const urls = require('../models/urls');

module.exports = function(express){
const router = express.Router();

  // generate status check
  router.get('/status', function(req, res){
    res.json({ healthy : true });

  });

    // generate short url
  router.post ("/url", function(req, res){
    var reqURLS = require("../routes/urlshortener.js");
    var longUrl = req.body.long_url;
    var shortUrl = "";
    shortUrl = reqURLS.genurl_Short(longUrl);
    req.body.short_url = shortUrl;

    urls.findOne({long_url: longUrl}), function(err, urls) {
      if(urls.long_url === longUrl){
        res.send({"short_url":shortUrl});
      } else {
    //create database instances for long url
    urls.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data)=>{
      res.status(200).json(data);

    //res.send({"short_url":shortUrl});
    // create database instances for short url
    urls.create({"short_url" : short_url}).then(function(urls){

      });
    });
  }
}
      //res.send({"short_url":shortUrl});

  });


return router;
};
