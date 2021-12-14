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

const cartaUsuario1 = comprarCarta();

const cartaUsuario2 = comprarCarta();

const cartaComputador1 = comprarCarta();

const cartaComputador2 = comprarCarta();

const somaValorCartaUsuario = cartaUsuario1.valor + cartaUsuario2.valor;

const somaValorCartaComputador = cartaComputador1.valor + cartaComputador2.valor;

console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${somaValorCartaUsuario}`);
console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${somaValorCartaComputador}`)

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