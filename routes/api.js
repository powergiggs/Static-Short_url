/*
URL Shortener API
Kevin Smith
*/
const urls = require('../models/urls');
const util = require('../lib/util');


module.exports = function(express){
const router = express.Router();

  // generate status check
  router.get('/status', function(req, res){
    res.json({ healthy : true });

  });

  // read all urls from db
  router.get('/urls', (req, res) => {
    urls.findAll((err) => {
      util.debug("Error: something went wrong", err);
      res.status(500).json(err);

    },(data) => {
      util.debug("all urls access", data);
      res.status(200).json(data);

    })

  });


  // read one url by id
  router.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id
    urls.find(req.body,(err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data.short_url);
      res.links(200, data.longUrl);
    })

  });

  // update urls
  router.post('/urls/:id', (req, res) => {
    req.body.id = req.params.id
    urls.update(req.body, (err) => {
      res.status(500).json(err);
    },(data) => {
      res.status(200).json(data);
    })

  });

    // Create  url
  router.post ("/urls", function(req, res){
    var reqURLS = require("../routes/urlshortener.js");
    var longUrl = req.body.long_url;
    var shortUrl = "";
    shortUrl = reqURLS.genurl_Short(longUrl);
    req.body.short_url = "https://" + shortUrl;
    //res.send({"short_url":shortUrl});

    //create database instances for long url
    urls.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data)=>{
      res.status(200).json(data);

    //res.send({"short_url":shortUrl});
    // create database instances for short url
    urls.create({"short_url" : short_url}).then(function(urls){

      })
    });


  });

  //delete
  router.delete('/urls/:id', (req, res) =>{
    req.body.id = req.params.id
    urls.destroy(req.body, (err) =>{
      res.status(500).json(err);
    },(data) =>{
      res.status(200).json(data);
    })

  });




return router;
};
