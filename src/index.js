const serie = new Serie();

test('Calcular serie para n = 1', () => {
  const resultado = serie.serie(1);
  expect(resultado).toBe(1);
});

test('Calcular serie para n = 2', () => {
  const resultado = serie.serie(2);
  expect(resultado).toBe(3);
});

// ... Pruebas para los demás casos de prueba (n = 3, 4, ..., 10).
