```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    // Escreva seu código aqui
    let n = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] === numeroEscolhido) {
            n++
        }
    } if (n !== 0) {
        return `O número ${numeroEscolhido} aparece ${n}x`
    } else {
        return `Número não encontrado`
    }
}```