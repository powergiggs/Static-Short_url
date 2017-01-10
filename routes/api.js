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

  // read all urls from db
  router.get('/url', (req, res) => {
    urls.findAll((err) => {
      res.status(500).json(err);

    },(data) => {
      res.status(200).json(data);

    })

  });


  // read one url by id
  router.get('/url/:id', (req, res) => {
    req.body.id = req.params.id
    urls.find(req.body,(err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })

  });

  // update urls
  router.post('/url/:id', (req, res) => {
    req.body.id = req.params.id
    urls.update(req.body, (err) => {
      res.status(500).json(err);
    },(data) => {
      res.status(200).json(data);
    })

  });

    // Create  url 
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

  //delete
  router.delete('/url/:id', (req, res) =>{
    req.body.id = req.params.id
    urls.destroy(req.body, (err) =>{
      res.status(500).json(err);
    },(data) =>{
      res.status(200).json(data);
    })

  });




return router;
};
