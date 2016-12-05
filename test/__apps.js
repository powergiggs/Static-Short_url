const expect = require('chai').expect;
const request = require('supertest');
/*var express = require("express")
var app = express ();
*/


describe('App Routes', () => {
  var server;
  var app;

  beforeEach(() => {
    server = require('../src/server.js');
  });

  afterEach(() => {
    server.close();
  });

  // Test for Multiple Apps
  it('GET /api/cars returns multiple cars', (done) => {
    request(server)
      .get('/api/cars')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const apps = res.body;

        // Save one single app from the list to test on in later tests
        this.app = apps[0]

        expect(apps.length).to.be.above(0)
      })
      .end(done)
  });

  // Test for a single app
/*  it('GET /api/v1/apps/:id returns an app obj with id, title, description, and releaseDate properties', (done) => {
    request(server)
      .get('/api/v1/apps/' + this.app.make)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const app = res.body;
        expect(app).to.have.property('make')
        expect(app).to.have.property('model')
        expect(app).to.have.property('year')
        //expect(app).to.have.property('releaseDate')
      })
      .end(done)
  });
  */

});
