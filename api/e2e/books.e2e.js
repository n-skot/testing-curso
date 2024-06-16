const request = require('supertest');
const { MongoClient } = require('mongodb');
const { config } = require('../src/config/')
const { booksE2e } = require('../src/fakes/book.fake')
const createApp = require('../src/app');

const DB_NAME = config.dbName;
const MONGO_URL = config.dbUrl;

describe('test for books', () => {
  let app;
  let server;
  let database;
  let client;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(5000);
    client = new MongoClient(
      MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
    await client.close();
  });

  describe('test for GET api/v1/books', () => {
    test('test for books', async () => {
      //Arrange
      const fakeBooks = booksE2e(6);
      const seed = await database.collection('books').insertMany(fakeBooks);
      //Act
      const response = await request(app).get('/api/v1/books');
      //Assert
      expect(response.status).toEqual(200);
      console.log(seed);
      console.log(response.body);
      expect(response.body.length).toEqual(seed.insertedCount);
    });
  });
});
