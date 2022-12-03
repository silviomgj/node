const contadorA = require('./instancaUnica')
const contadorB = require('./instancaUnica')

const contadorC = require('./instanciaNova')
const contadorD = require('./instanciaNova')

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

