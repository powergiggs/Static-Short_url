/*
URL Shortener API
Kevin Smith
*/
const urls = require('../models/urls');
//const debug = require('debugging-tool');


module.exports = function (express) {
  const router = express.Router();

  // generate status check
  router.get('/status', function (req, res) {
    res.json({ healthy: true });
  });

  // read all urls from db
  router.get('/urls', (req, res) => {
    urls.findAll((err) => {
      debug.debug('Error: something went wrong', err);
      res.status(500).json(err);
    }, (data) => {
      debug.debug('Read all urls from db', 'api/v1/urls/', 'success!');
      res.status(200).json(data);
    });
  });


  // read one url by id
  router.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    urls.find(req.body, (err) => {
      debug.debug('Error: something went wrong', err);
      res.status(500).json(err);
    }, (data) => {
      debug.debug('Access url by id from db', 'api/v1/urls/:id', 'success!');
      res.status(200).json(data);
    });
  });

  // update urls
  router.post('/urls/:id', (req, res) => {
   req.body.id = req.params.id;
    urls.update(req.body, (err) => {
      debug.debug('Error: something went wrong', err);
      res.status(500).json(err);
    }, (data) => {
      util.debug('Update url by id to db', 'api/v1/urls/:id', 'success!');
      res.status(200).json(data);
    });
  });

    // Create  url
  router.post('/urls', function (req, res) {
    var reqURLS = require('../routes/urlshortener.js');
    var longUrl = req.body.long_url;
    var shortUrl = '';
    shortUrl = reqURLS.genurl_Short(longUrl);
    req.body.short_url = 'https://' + shortUrl;


    // create database instances for long url
    urls.create(req.body, (err) => {
      debug.debug('Error: something went wrong', err);
      res.status(500).json(err);
    }, (data) => {
      debug.debug('create url to add to db', 'api/v1/urls', 'success!');
      res.status(200).json(data);

    // create database instances for short url
      urls.create({ 'short_url' : short_url }).then(function (urls) {

      });
    });
  });

  // delete
  router.delete('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    urls.destroy(req.body, (err) => {
      debug.debug('Error: something went wrong', err);
      res.status(500).json(err);
    }, (data) => {
      debug.debug('Delete url by id from db', 'api/v1/urls:id', 'success!');
      res.status(200).json(data);
    });
  });


  return router;
};
