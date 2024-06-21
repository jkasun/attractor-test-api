import request from 'supertest';

import app from '../src/app';

describe('Should return 404 if the city does not exists', () => {
  it('responds with a not found message', (done) => {
    request(app)
      .get('/api/weather/some-unknown-city')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});

describe('Should return weather info by city', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/weather/Sydney')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/, done)
  });
});
