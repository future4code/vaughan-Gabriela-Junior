/*Exercício de interpretação

Exercício 1.
a) Ele testa se o número é par (se é divisível por 2).

b) Ele imprime "Passou no teste" para números pares, divisiveis por 2.

c) Ele imprime "Não passou no teste" para números impares.

Exercício 2.

a) O código acima serve para informar o preço de variadas frutas.

b)"O preço da fruta Maçã é R$ 2.25"

c)"O preço da fruta Pêra é R$ 5"

Exercício 3.

a) Está abrindo um prompt no navegador para pedir ao usuário que digite um número.

b) 10 = "Esse número passou no teste"
- 10 = não irá ser impresso nada.

c) Irá ocorrer um erro com a mensagem.
*/

//Exercício de escrita

//Exercício 1.

//a)

const idadeUsuario = prompt("Qual sua idade?");

//b)

const idadeUsuarioNumero = Number(idadeUsuario);

//c

function verificarIdadeMinima (idade) {

    if (idade >= 18) {
        return "Você pode dirigir!"
    }
    else {
        return "Você não pode dirigir!"
    }
}

console.log(verificarIdadeMinima(idadeUsuarioNumero));

//Exercício 2.

const turnoDoEstudo = prompt("Que turno do dia você estuda? Digite M para matutino, V para vespertino ou N para Norturno.")

function cumprimentar (turno) {

    if (turno === "M") {
        return "Bom dia!";
    }
    else if (turno === "V") {
        return "Boa tarde!";
    } else if (turno === "N"){
        return "Boa noite!";
    } else {
        return "Sem cumprimento pra você!";
    }
}

console.log(cumprimentar(turnoDoEstudo));

//Exercício 3.

function cumprimentarEmSwitchCase (turno) {

    switch (turno) {
        case "M":
            console.log("Bom dia!")
            break
        case "V":
            console.log("Boa tarde!")
            break
        case "N":
            console.log("Boa noite!")
            break
        default:
            console.log("Você não colocou a letra correta.")
            break   
    }
}

(cumprimentarEmSwitchCase(turnoDoEstudo))

//Exercício 4.

const generoDoFilme = prompt("Qual o gênero do filme?");
const precoDoIngresso = Number(prompt("Qual o preço do ingresso?"));

function verificarAssistirFilme (genero, preco, lanche) {

    if (genero === "Fantasia" && preco < 15) {
        lanche = prompt("Qual lanchinho você vai comprar?") // DESAFIO 1.
        return `Bom filme!
                Aproveite o/a seu/sua ${lanche}` //DESAFIO 1.
    } else {
        return "Escolha outro filme :("
    }
}

console.log(verificarAssistirFilme(generoDoFilme, precoDoIngresso));

//Desafios

//2.

const nomeCompleto = prompt("Digite seu nome completo");
const tipoDeJogo = prompt("Digite 'IN' para jogo internacional ou 'DO' para doméstico");
const etapaDoJogo = prompt("Ele é Semi-final(SF), decisão de terceiro lugar (DT) ou final (FI)?");
const categoriaDoIngresso = prompt("Categoria? 1, 2, 3 ou 4")
const quantidadeDeIngressos = Number(prompt("Quantos ingressos você quer comprar?"));

function retornarNomeInteiroDoTipo (tipo) {
    if (tipo === "IN") { 
        return `Internacional`
    } else {
        return `Nacional`
    }
}

function retornarNomeInteiroDaEtapa (etapa) {
    if (etapa === "SF"){
        return `Semi-final`
    }
    else if (etapa === "DT"){
        return `Decisão de Terceiro Lugar`
    }
    else if (etapa === "FI") {
        return `Final`
    }
}

const tipoDeJogoCompleto = retornarNomeInteiroDoTipo(tipoDeJogo)
const etapaDoJogoCompleto = retornarNomeInteiroDaEtapa(etapaDoJogo)

function retornaValorDoIngresso (etapa, categoria) {
    if (etapa === 'SF' && categoria === '1') {
        return 1320
    }
    else if (etapa === 'SF' && categoria === '2') {
        return 880
    }
    else if (etapa === 'SF' && categoria === '3') {
        return 550
    }
    else if (etapa === 'SF' && categoria === '4') {
        return 220
    }
    else if (etapa === 'DT' && categoria === '1') {
        return 660
    }
    else if (etapa === 'DT' && categoria === '2') {
        return 440
    }
    else if (etapa === 'DT' && categoria === '3') {
        return 330
    }
    else if (etapa === 'DT' && categoria === '4') {
        return 170
    }
    else if (etapa === 'FI' && categoria === '1') {
        return 1980
    }
    else if (etapa === 'FI' && categoria === '2') {
        return 1320
    }
    else if (etapa === 'FI' && categoria === '3') {
        return 880
    }
    else if (etapa === 'FI' && categoria === '4') {
        return 330
    }
}

let valorDoIngresso = retornaValorDoIngresso(etapaDoJogo, categoriaDoIngresso)

function retornarValorInternacional (tipo, valor) {
    tipo = tipoDeJogo
    if (tipo === "IN") {
        return valor * 4.10
    } else {
        return valor
    }
}
   
valorDoIngresso = retornarValorInternacional(tipoDeJogo, valorDoIngresso)
let valorTotal = valorDoIngresso * quantidadeDeIngressos

console.log(`---Dados da compra---`);
console.log(`Nome do cliente: ${nomeCompleto}`);
console.log(`Tipo do jogo: ${tipoDeJogoCompleto}`);
console.log(`Etapa do jogo: ${etapaDoJogoCompleto}`);
console.log(`Categoria: ${categoriaDoIngresso}`)
console.log(`Quantidade de Ingressos: ${quantidadeDeIngressos}`)
console.log(`---Valores---`)
console.log(`Valor do ingresso: R$${valorDoIngresso}`)
console.log(`Valor total: R$ ${valorTotal}`)