const Person = require('./06-person')

describe('test person', () => {
  let person;
  beforeEach(async () => {
    //Arrage
    person = new Person('Rick', 45, 1.7)
  })
  test('down', () => {
    //Arrage
    person.weight = 45;
    //Act
    const imc = person.calcIMC();
    //Assert
    expect(imc).toBe('down')
  })

  test('normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal')
  })

  test('obesidad', () => {
    person.weight = 75;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight')
  })
})
