//Exercício 2

//a) A entrada é um array de números e a saída um objeto com o maior númbero, menor e a média de todos os números.

function obterEstatisticas(numeros: number[]): { maior: number, menor: number, media: number } {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
};

//b) numerosOrdenados: number[]; soma: number

//c)

type amostraDeDados = {
    numeros: number[]
    obterEstatisticas: (numeros: number) => {}
};