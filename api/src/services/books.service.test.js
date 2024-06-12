const BooksService = require('./books.service')

const fakeBooks = [
  {
    _id: 1,
    name: "Muchas vidas, muchos maestros",
  },
]

const mockGetAll = jest.fn()

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { },
}))

describe('test book service', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  })

  describe('test for getBooks', () => {
    test('metodo getBook del servico books', async () => {
      mockGetAll.mockResolvedValue(fakeBooks)
      const books = await service.getBooks();
      console.log(books);
      expect(books.length).toHaveBeenCalled();
      expect(books.length).toHaveBeenCalledWith('Books', {});
      expect(books.length).toHaveBeenCalledTimes(1);
      expect(books.length).toEqual(1);
    });
  });

  describe('test for getBooks', () => {
    test('metodo getBook del servico books', async () => {
      mockGetAll.mockResolvedValue({
        _id: 1,
        name: "Estoicismo"
      })
      const books = await service.getBooks();
      console.log(books);
      expect(books[0].name).toEqual('Estoicismo');
    });
  });

})
