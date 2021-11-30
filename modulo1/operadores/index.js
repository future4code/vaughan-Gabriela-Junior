/* Exercícios de interpretação
1.
a. false
b. false
c. false
d. boolean

2.
Irá ser impresso no console o primeiro número e em seguida o segundo, não serão somados.
Isso ocorre porque as variáveis das perguntas serão do tipo string, e não number.

3.
Para solucionar o problema, deverá ser feito:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
const soma = primeiroNumero + segundoNumero

console.log(soma)

outra alternativa:

let primeiroNumero = (prompt("Digite um numero!"))
let segundoNumero = (prompt("Digite outro numero!"))
const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)
*/

//Exercícios de escrita

//Exercicio 1.

const idadeUsuario = Number(prompt("Qual sua idade?"));
const idadeMelhorAmiga = Number(prompt("Qual a idade da sua melhor amiga?"));

const diferencaIdade = idadeUsuario > idadeMelhorAmiga;

console.log("Sua idade é maior do que a da sua melhor amiga?", diferencaIdade);

//Exercicio 2.

const numeroPar = Number(prompt("Digite um número par"));

console.log(numeroPar % 2);

//c)Sempre dá o resultado "0".

//d)O resultado é "1".

//Exercicio 3.

const idade = Number(prompt("Qual sua idade?"));

const idadeDias = Number(idade * 365);

console.log("Você tem", idade * 12);
console.log(idade * 365);
console.log(idadeDias * 24);

//Exercício 4.

const primeiroNumero = Number(prompt("Digite um número"));
const segundoNumero = Number(prompt("Digite outro número"));

console.log("O primeiro número é", primeiroNumero, "e o segundo número é", segundoNumero);

const bool1 = primeiroNumero > segundoNumero;
const bool2 = primeiroNumero === segundoNumero;10

console.log("O primeiro número é maior que o segundo?", bool1);
console.log ("O primeiro número é igual ao segundo?", bool2);

const divisao1 = primeiroNumero % segundoNumero;
const bool3 = divisao1 === 0;

const divisao2 = segundoNumero % primeiroNumero;
const bool4 = divisao2 === 0;

console.log("O primeiro numero é divisivel pelo segundo?", bool3);
console.log("O segundo número é divisível pelo primeiro?", bool4);

//desafio
//2.

const kWh = Number(0.05)
const residencia = kWh * 280
console.log("Você paga", residencia, "reais de energia");

const desconto = residencia * 0.15

console.log("Seu desconto é de", desconto, "reais.");
console.log("Logo, o valor a ser pago é de", residencia - desconto, "reais.");

//3.
//a)


const kgEmLibras = Number(2.20462);
const librasEmKg = Number(0.453592);

console.log("20lb equivalem a", (librasEmKg * 20), "kg.");