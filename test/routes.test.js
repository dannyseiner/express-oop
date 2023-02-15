import request from 'supertest';

it("DEFAULT POST test", async done => {
  const response = await request('http://localhost:3010').post('/test').send({ name: 'john' });
  expect(response.status).toMatch(200);
  done();
});

it("DEFAULT GET test", async done => {
  const response = await request('http://localhost:3010').get('/')
  expect(response.status).toMatch(200)
  done();
});


