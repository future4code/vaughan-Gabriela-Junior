// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
// Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter(numero => numero % 2 === 0)
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = array.filter(numero => numero % 2 === 0)
    const numerosElevados = numerosPares.map(numero => numero * numero)
    return numerosElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = -Infinity
    for (i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
    } return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const arrayNumeros = [num1, num2]
    const numeroMaior = Math.max(...arrayNumeros)
    const numeroMenor = Math.min(...arrayNumeros)

    const objeto = {
        maiorNumero: numeroMaior,
        maiorDivisivelPorMenor: numeroMaior % numeroMenor === 0,
        diferenca: numeroMaior - numeroMenor
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    arrayPrimeirosPares = []
    for (i = 0; arrayPrimeirosPares.length < n; i++) {
        if (i % 2 === 0) {
            arrayPrimeirosPares.push(i)
        }
    } return arrayPrimeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return `Equilátero`
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return `Escaleno`
    } else {
        return `Isósceles`
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b)
    arraySegundoMaiorESegundoMenor = [array[array.length-2], array[1]]
    return arraySegundoMaiorESegundoMenor
}

console.log(retornaSegundoMaiorESegundoMenor())

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa.nome = "ANÔNIMO"
    return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter((pessoa) => {
        return (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60)
    })
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
        return (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60)
    })
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    //somar as compras e subtrair do saldoTotal, atualizar o saldoTotal com esse valor
    // let somaCompras = 0
    // const saldoAtualizado = contas.map((conta) => {
    //     for (i = 0; i < conta.compras.length; i++) {
    //         somaCompras += conta.compras[i]
    //     }
    // })
    // return saldoAtualizado
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    //     const consultasOrdemAlfabetica = consultas.map((consulta) => {
    //         consulta.nome.sort((a, b) => b[1]-a[1])
    //         return consulta
    //     })
    // return consultasOrdemAlfabetica
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}