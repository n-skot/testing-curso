const Person = require('./06-person')

describe('test person', () => {
  let person;
  beforeEach(async () => {
    person = new Person('Rick', 45, 1.7)
  })
  test('down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
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
