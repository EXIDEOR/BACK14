const suma = ({ numUno, numDos }) => {
  return numUno + numDos
}

const verificarSuma = ({ numUno, numDos, total }) => {
  const sumarValores = suma({ numUno, numDos })

  if (sumarValores === total) console.log('Los valores coinciden')
  else
    console.log('La prueba fallo')
}

verificarSuma({ numUno: 5, numDos: 5, total: 10 })
verificarSuma({ numUno: 6, numDos: 5, total: 10 })
