const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1299.99,
    desconto: 0.15
}

fs.writeFile(  'arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo salvo!')
})
