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


if (confirm(`Boas vindas ao jogo de Blackjack!\nQuer iniciar uma nova rodada?`)) {

   let cartaUsuario1 = comprarCarta();

   let cartaUsuario2 = comprarCarta();

   let cartaComputador1 = comprarCarta();

   let cartaComputador2 = comprarCarta();

   let arrayCartasUsuario = [cartaUsuario1, cartaUsuario2];

   let arrayCartasComputador = [cartaComputador1, cartaComputador2];

   let somaCartasUsuario = 0;
   let somaCartasComputador = 0;


   if (cartaUsuario1.valor === 11 && cartaUsuario2.valor === 11) {
      cartaUsuario1 = comprarCarta();
      cartaUsuario2 = comprarCarta();

   } else if (cartaComputador1.valor === 11 && cartaComputador2.valor === 11) {
      cartaComputador1 = comprarCarta();
      cartaComputador2 = comprarCarta();
   }

   for (let i = 0; i < arrayCartasUsuario.length; i++) {
      somaCartasUsuario += arrayCartasUsuario[i].valor
   }

   const perguntarUsuarioLoop = (array) => {
      let comprarCartaUsuario = confirm(`Suas cartas são ${arrayCartasUsuario.map(carta => carta.texto)}. Seu total de pontos é: ${somaCartasUsuario}. A carta revelada do computador é ${cartaComputador1.texto}.
      \nDeseja comprar mais uma carta?`)
      while (comprarCartaUsuario) {
         let novaCarta = comprarCarta()
         array.push(novaCarta)
         somaCartasUsuario += novaCarta.valor
         if (somaCartasUsuario > 21) {
            comprarCartaUsuario = false
            alert(`Você perdeu!`)
         } else {
            comprarCartaUsuario = confirm(`Suas cartas são ${arrayCartasUsuario.map(carta => carta.texto)}. Seu total de pontos é: ${somaCartasUsuario}. A carta revelada do computador é ${cartaComputador1.texto}.
         \nDeseja comprar mais uma carta?`)
         }
      }
   }

   perguntarUsuarioLoop(arrayCartasUsuario);

   arrayCartasComputador.map(carta => somaCartasComputador += carta.valor);


   while (somaCartasComputador < 20 && somaCartasComputador < somaCartasUsuario && somaCartasUsuario <= 21) {
      let novaCarta = comprarCarta()
      arrayCartasComputador.push(novaCarta)
      somaCartasComputador += novaCarta.valor
   }

   console.log(arrayCartasComputador);
   console.log(somaCartasComputador);

   if ((somaCartasUsuario > 21 || somaCartasUsuario < somaCartasComputador) && somaCartasComputador <= 21) {
      alert(`Você perdeu! Seu total de pontos foi: ${somaCartasUsuario}.\nO total do computador foi: ${somaCartasComputador}`)
   } else if (somaCartasUsuario === somaCartasComputador) {
      alert(`Vocês empataram! Seu total de pontos e do computador foi: ${somaCartasUsuario}`)
   } else {
      alert(`Você ganhou, parabéns! Seu total de pontos foi: ${somaCartasUsuario}.\nO total do computador foi: ${somaCartasComputador}`)
   };

} else {
   alert(`O jogo acabou!`);
}