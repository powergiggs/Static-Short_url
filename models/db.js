const Sequelize = require('sequelize');

require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 1000,

  },
  logging: false,

});
// creat db table url
const urls = sequelize.define('url', {
  long_url: {
    type: Sequelize.STRING,

  },
  short_url: {
    type: Sequelize.STRING,

  },


});

sequelize.sync();
exports.sequelize = sequelize;
exports.urls = urls;
