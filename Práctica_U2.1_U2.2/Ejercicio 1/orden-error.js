const fs = require('fs')

console.log('A')
setTimeout(() => console.log('B'), 0)
fs.readFile('no-existe.txt', 'utf8', (err, texto) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log('C')
    }
})
const texto = fs.readFileSync(__filename, 'utf8')
console.log('D', texto.length > 0)
