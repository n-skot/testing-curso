function sum(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function promedio() {
  const sum = 10 + 10 + 10 + 7 + 8;
  const promedio = sum / 5;
  return promedio;
}

module.exports = { sum, multiplicar, dividir, promedio }
