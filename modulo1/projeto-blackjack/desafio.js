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


if(confirm(`Boas vindas ao jogo de Blackjack!\nQuer iniciar uma nova rodada?`)) {
   
let cartaUsuario1 = comprarCarta();

let cartaUsuario2 = comprarCarta();

let cartaComputador1 = comprarCarta();

let cartaComputador2 = comprarCarta();

let arrayCartasUsuario = [cartaUsuario1, cartaUsuario2];

let arrayCartasComputador = [cartaComputador1, cartaComputador2];

   if (cartaUsuario1.valor === 11 && cartaUsuario2.valor === 11){
      cartaUsuario1 = comprarCarta();
      cartaUsuario2 = comprarCarta();

   } else if (cartaComputador1.valor === 11 && cartaComputador2.valor === 11) {
      cartaComputador1 = comprarCarta();
      cartaComputador2 = comprarCarta();
   }

function retornaPrimeiraRodada (carta1, carta2, carta3, carta4, carta5, carta6) {

   const somaCartasUsuario = carta1.valor + carta2.valor;
   const somaCartasComputador = carta3.valor + carta4.valor
   
      if(confirm(`Suas cartas são ${carta1.texto} ${carta2.texto}. A carta revelada do computador é ${carta3.texto}\nDeseja comprar mais uma carta?`)) {
            (confirm(`Suas cartas são ${carta1.texto} ${carta2.texto} ${carta5.texto}. A carta revelada do computador é ${carta3.texto}\nDeseja comprar mais uma carta?`))
               
      }else{
         if (somaCartasUsuario === somaCartasComputador) {
            alert(`Suas cartas são ${carta1.texto} ${carta2.texto}. 
            Sua pontuação é ${somaCartasUsuario}\nAs cartas do computador são ${carta3.texto} ${carta4.texto}. A pontuação do computador é ${somaCartasComputador}\nEmpate!`)
         } else if (somaCartasComputador > 21) {
            alert(`Suas cartas são ${carta1.texto} ${carta2.texto}. 
            Sua pontuação é ${somaCartasUsuario}\nAs cartas do computador são ${carta3.texto} ${carta4.texto}. A pontuação do computador é ${somaCartasComputador}\nO usuário ganhou!`)
         } else if (somaCartasUsuario > 21) {
            alert(`Suas cartas são ${carta1.texto} ${carta2.texto}. 
            Sua pontuação é ${somaCartasUsuario}\nAs cartas do computador são ${carta3.texto} ${carta4.texto}. A pontuação do computador é ${somaCartasComputador}\nO computador ganhou!`)
         } else if (somaCartasUsuario > somaCartasComputador) {
            alert(`Suas cartas são ${carta1.texto} ${carta2.texto}. 
            Sua pontuação é ${somaCartasUsuario}\nAs cartas do computador são ${carta3.texto} ${carta4.texto}. A pontuação do computador é ${somaCartasComputador}\nO usuário ganhou!`)
         } else if (somaCartasUsuario < somaCartasComputador) {
            alert(`Suas cartas são ${carta1.texto} ${carta2.texto}. 
            Sua pontuação é ${somaCartasUsuario}\nAs cartas do computador são ${carta3.texto} ${carta4.texto}. A pontuação do computador é ${somaCartasComputador}\nO computador ganhou!`)
            }
         }
      }
   
   retornaPrimeiraRodada(cartaUsuario1, cartaUsuario2, cartaComputador1, cartaComputador2);

} else {
   alert(`O jogo acabou!`);
}