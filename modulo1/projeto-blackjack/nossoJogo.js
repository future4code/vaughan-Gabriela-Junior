/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log(`Boas vindas ao jogo de Blackjack!`);

if(confirm(`Quer iniciar uma nova rodada?`)) {

const carta1 = comprarCarta();

const carta2 = comprarCarta();

const carta3 = comprarCarta();

const carta4 = comprarCarta();

const somaValorCartaUsuario = carta1.valor + carta2.valor;

const somaValorCartaComputador = carta3.valor + carta4.valor;

console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - pontuação ${somaValorCartaUsuario}`);
console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} - pontuação ${somaValorCartaComputador}`)

function retornarMensagens (somaUsuario, somaComputador) {
    if (somaUsuario === somaComputador) {
      return `Empate!`
   } else if (somaComputador > 21) {
      return `O usuário ganhou!`   
   } else if (somaUsuario > 21) {
      return `O computador ganhou!`
   } else if (somaUsuario > somaComputador) {
      return `O usuário ganhou!`;
   } else if (somaUsuario < somaComputador) {
      return `O computador ganhou!`
      }
   }

console.log(retornarMensagens(somaValorCartaUsuario, somaValorCartaComputador))


} else {
   console.log(`O jogo acabou!`);
}