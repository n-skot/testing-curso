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
