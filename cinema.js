console.log('We made the files')        


var catalogo = require("./catalogo.json")

console.log(catalogo)
var catalogoString = JSON.stringify(catalogo)


console.log(catalogoString)

var catalogoObj = JSON.parse(catalogoString)
console.log(catalogoObj)