const request = require('supertest');

const createApp = require('../src/app');

describe('test for hello world', () => {
  let app;
  let server;

  beforeAll(() => {
    app = createApp();
    server = app.listen(5000);
  });

  describe('test for GET', () => {
    test('test for hello world', async () => {
      const response = await request(app).get('/');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('Hello World!');
    });
  });

  afterAll(async () => {
    await server.close();
  });
});
