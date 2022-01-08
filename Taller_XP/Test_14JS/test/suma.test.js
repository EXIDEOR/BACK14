const suma = ({ numUno, numDos }) => {
  return numUno + numDos
}

test('La suma de dos números es 10', () => {
  const totalToFound = 10
  const total = suma({ numUno: 5, numDos: 5 })
  expect(total).toBe(totalToFound)
})

test('La suma de los números no es 10', () => {
  const totalToFound = 10
  const total = suma({ numUno: 7, numDos: 5 })
  expect(total).toBe(totalToFound)
})
