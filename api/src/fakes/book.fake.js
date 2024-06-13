const { faker } = require('@faker-js/faker');

const bookGenerate = () => ({
  _id: faker.string.uuid,
  name: faker.commerce.product,
  price: faker.commerce.price,
});

const bookManyGenerate = (size) => {
  const filter = size ?? 5;
  const booksArray = [];
  for (let books = 0; books <= filter; books += 1) {
    const bookFake = {
      _id: faker.string.uuid(),
      name: faker.commerce.product(),
      price: faker.commerce.price(),
    };
    booksArray.push(bookFake);
  }
  return booksArray;
};

module.exports = { bookGenerate, bookManyGenerate };
