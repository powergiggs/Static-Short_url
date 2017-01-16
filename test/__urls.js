const expect = require('chai').expect;
const request = require('supertest');
const server = request('http://localhost:3000');


  describe('Urls API', () => {
    var app;

    // Test for Multiple urls
    it('GET /api/v1/urls returns multiple urls', (done) => {
      server.get('/api/v1/urls')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          const urls = res.body;

          // Save one single app from the list to test on in later tests
          this.app = urls[0]

          expect(urls.length).to.be.above(0);
        })
        .end(done);
    });

    // Test for a single urls by id
    it('GET /api/v1/urls/:id returns obj with id, long url, short url, created at and updated at', (done) => {
        server.get('/api/v1/urls/' + this.app.id)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          const url = res.body;
          expect(url).to.have.property('id');
          expect(url).to.have.property('long_url');
          expect(url).to.have.property('short_url');
        })
        .end(done);
    });

    // Test for adding urls
    it('POST /api/v1/urls update with new url', (done) => {
      server.post('/api/v1/urls')
     .set('Accept', 'Application/json')
     .send({
       long_url: 'http://findfastbusinessfunds.com/'
     })
     .expect((res) => {
       const url = res.body;
       expect(url.long_url).to.equal('http://findfastbusinessfunds.com/');
     })
     .end(done);
    });
  });
