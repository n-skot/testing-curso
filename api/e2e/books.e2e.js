const request = require('supertest');

const { bookManyGenerate } = require('../src/fakes/book.fake');

const mockGetAll = jest.fn();

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { },
})));

const createApp = require('../src/app');

describe('test for books', () => {
  let app;
  let server;

  beforeAll(() => {
    app = createApp();
    server = app.listen(5000);
    jest.clearAllMocks();
  });

  describe('test for GET api/v1/books', () => {
    test('test for books', async () => {
      const fakeBooks = bookManyGenerate(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      const response = await request(app).get('/api/v1/books');
      expect(response.status).toEqual(200);
      console.log(response.body);
      expect(response.body.length).toEqual(fakeBooks.length);
    });
  });

  afterAll(async () => {
    await server.close();
  });
});
