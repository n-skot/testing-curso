const { bookManyGenerate } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { },
})));

describe('test book service', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('metodo getBook del servico books', async () => {
      const fakeBooks = bookManyGenerate(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});
      console.log(books);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(books.length).toEqual(fakeBooks.length);
    });
  });

  describe('test for getBooks', () => {
    test('metodo getBook del servico books', async () => {
      const fakeBooks = bookManyGenerate(5);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks();
      console.log(books);
      expect(books[0].name).toEqual(books[0].name);
    });
  });
});
