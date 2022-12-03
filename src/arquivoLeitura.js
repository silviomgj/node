const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono... cuidado ao usar pois se o arquivo for muito grande ele entra no eventloop

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono ..

fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config =  JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json')   // nesse modelo ele traz o arquivo convertido em objeto
console.log(config.db)

// leitura de pastas

fs.readdir(__dirname, (err, arquivos) =>{
    console.log('conteudo da pasta é ....')
    console.log(arquivos)
})
