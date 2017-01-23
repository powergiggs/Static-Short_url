
//const debug = require('debugging-tool');
const expect = require('chai').expect;
const request = require('supertest');
const server = require('../src/server');


// data object variable for routes and method
const routes = [
  {
    routeUrl: '/api/v1/urls',
    title: 'Read all urls from db',
    method: 'get',
  },
  {
    routeUrl: '/api/v1/urls',
    title: 'Create new db url ',
    method: 'post',
  },
  {
    routeUrl: '/api/v1/urls:id',
    title: 'Get url by id from db',
    method: 'get',
  },
  {
    routeUrl: '/api/v1/urls:id',
    title: 'Update url by id to db',
    method: 'post',
  },
  {
    routeUrl: '/api/v1/urls:id',
    title: 'Delete url by id from db',
    method: 'delete',
  },
];


  describe('Urls Routes', () => {

    const mockURL = {
      id: 10,
      longUrl: 'https://www.npmjs.com/package/debugging-tool',
      short_url: 'https://HU9r9',


    };
    // assign api server to a variable
    const appServer = request(server.server);


    // loop through the routes data object
    routes.forEach((data) => {
      // check to see if the method condition is match with each case
      switch(data.method) {
        // read all test
        case 'get':
          it(data.title, (done) => {
            appServer.get(data.routeUrl)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect((res) => {
            expect(res.body.length).to.be.above(100);
          // debug.debug(data.routeUrl + 'success');
          });
            done();
          });
          // break case once condition is true
          break;
          // creat data test
          case 'post':
            it(data.title, (done) => {
              appServer.post(data.routeUrl)
            .send(mockURL)
            .expect((res) => {
              expect(res.body.long_url).to.equal('https://www.npmjs.com/package/debugging-tool');
            });
              done();
            });

          break;
          // read by id test
            case 'get':
          it(data.title, (done) => {
            appServer.get(data.routeUrl + mockURL.id)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect((res) => {
              expect(res.body).to.have.property('long_url');
              expect(res.body).to.have.property('short_url');
              expect(res.body).to.have.property('id').equal(mockURL.id);
            });
            done();
          });

          break;
          // update test
        case 'post':
          it(data.title, (done) => {
            appServer.post(data.routeUrl + mockURL.id)
            .send({
              long_url: 'http://findfastbusinessfunds.com/'
            })
            .expect((res) => {
              expect(res.body.long_url).to.equal('http://findfastbusinessfunds.com/');
              expect(res.body).to.have.property('id').equal(mockURL.id);
            });
            done();
          });

          break;
          // delete test
        case 'delete':
          it(data.title, (done) => {
            appServer.delete(data.routeUrl + mockURL.id)
              .expect((res) => {
                expect(res.body).to.have.property('long_url');
                expect(res.body).to.have.property('short_url');
                expect(res.body).to.have.property('id').equal(mockURL.id);
              });
            done();
          });
          break;


      }
    });
  });
