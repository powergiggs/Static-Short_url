/*
URL Shortener API
Kevin Smith
*/

const express = require('express'); // declare express
const bodyParser = require('body-parser'); // declare bodyParser
const util = require('../lib/util');
const app = express(); // declare apps

// declare port
const port = 3000;

// attach bodyParser to json body
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

// declare and set the routes
app.use('/api/v1', require('../routes/api.js')(express));
exports.server = app.listen(port, () => {
  util.debug('Our Server is running on port', port, 'success!');
});
