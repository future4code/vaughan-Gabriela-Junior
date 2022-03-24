// function imprimeTresCoresFavoritas() {
//     const cor1 = prompt("Insira sua primeira cor favorita")
//     const cor2 = prompt("Insira sua segunda cor favorita")
//     const cor3 = prompt("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }

const primeiraCor: string = process.argv[2]
const segundaCor: string =  process.argv[3]
const terceiraCor: string = process.argv[4]
console.log(primeiraCor, segundaCor, terceiraCor)