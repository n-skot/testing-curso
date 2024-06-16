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

const booksE2e = (size) => {
  const filter = size ?? 5;
  const booksArray = [];
  for (let books = 1; books <= filter; books += 1) {
    const booksFakes = {
      numSerie: faker.string.uuid(),
      name: faker.commerce.product(),
      year: faker.date.past(),
      price: faker.commerce.price(),
      author: faker.person.firstName(),
    };
    booksArray.push(booksFakes);
  }
  return booksArray;
}

module.exports = { bookGenerate, bookManyGenerate, booksE2e };
