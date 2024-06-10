const { dividir, multiplicar, sum, promedio } = require('./02.math')

test("suma, dividir y multiplicar", () => {
  const suma = sum(5, 5);
  const multi = multiplicar(5, 10);
  const divi = sum(10, 2);
  expect(suma).toBe(10);
  expect(multi).toBe(50);
  expect(divi).toBe(12);
})

test("promedio", () => {
  const prome = promedio();
  expect(prome).toBe(9)
})

// Setup
describe('test for math', () => {
  describe('sumas', () => {
    test('la suma de 5 + 45 es = 50', () => {
      const suma = sum(5, 45)
      expect(suma).toBe(50)
    })
  })

  describe('multiplicaciones', () => {
    test('la multi de 5 x 45 es = 225', () => {
      const multiplicacion = multiplicar(5, 45)
      expect(multiplicacion).toBe(225)
    })
  })

  describe('divisiones', () => {
    test('la division de 100 / 10 es = 10', () => {
      const division = dividir(100, 10)
      expect(division).toBe(10)
    })
  })
})
