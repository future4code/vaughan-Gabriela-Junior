/*Exercícios de interpretação.

Exercício 1.

O código está adicionando em loop valores até o quinto valor.
Irá imprimir o último valor apenas pois o "console.log" está fora do loop.

Exercício 2.

a) Será impresso no console todos os valores maiores que 18.

b) Seria necessário criar uma variável com ".indexOf".

Exercício 3.

Será impresso
"*
**
***
****"
 */

//Exercícios de escrita.

//Exercício 1.

const quantidadeBichinhosDeEstimacao = Number(prompt("Quantos bichinhos de estimação você tem?"))

//a)

function mensagemQtdadeBichinhos (quantidadeTotalDeBichinhos) {
    if (quantidadeTotalDeBichinhos === 0) {
        console.log(`Que pena! Você pode adotar um pet!`)
//b)
    } else {
        let nomeDosBichinhos = []
        
        for (let quantidadeAtualDeBichinhos = 0; quantidadeAtualDeBichinhos < quantidadeTotalDeBichinhos; quantidadeAtualDeBichinhos += 1) {
            mensagem = prompt("Qual o nome de cada um dos bichinhos?")
        
            nomeDosBichinhos.push(mensagem)

//c
            console.log(nomeDosBichinhos)
        }
    }
}

mensagemQtdadeBichinhos(quantidadeBichinhosDeEstimacao)

//Exercício 2.


//a)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

function imprimirValoresArrayOriginal (array) {
    for (let numerosArray of array) {

        console.log(numerosArray)
    }
}

imprimirValoresArrayOriginal(arrayOriginal)

//b) 

function imprimirValoresDivididosPor10 (array) {
    for (numerosArray of array) {
        divisao = numerosArray / 10

        console.log(divisao)
    }
}

imprimirValoresDivididosPor10(arrayOriginal)

//c)

function imprimirValoresPares (array) {
    let arrayPar = []
    for (numerosArray of array) {
        if (numerosArray % 2 === 0) {
            arrayPar.push(numerosArray)

            console.log(arrayPar)
        }
    }
}

imprimirValoresPares(arrayOriginal)

//d)

function imprimirArrayEmString (array) {
    
    for (let numerosArray of array) {
         mensagem = `O elemento do index ${array.indexOf(numerosArray)} é:  ${numerosArray}`

        console.log(mensagem)
    }
}

imprimirArrayEmString(arrayOriginal)

//e)
function imprimirValorMaiorEMenorDoArray (array) {
    let valorMaior = array[0];
    let valorMenor = array[0];
    for (let numerosArray of array) {
        if (valorMaior < numerosArray) {
                valorMaior = numerosArray;
            }

        if (valorMenor > numerosArray) {
                valorMenor = numerosArray;
        }
    }
    return `O maior número é ${valorMaior} e o menor é ${valorMenor};`
}

console.log(imprimirValorMaiorEMenorDoArray(arrayOriginal));