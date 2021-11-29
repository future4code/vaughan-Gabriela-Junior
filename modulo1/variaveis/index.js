/*Exercícios de interpretação de código
1. 10
10, 5

2. 10, 10, 10

3. let horasTrabalho = prompt("Quantas horas você trabalha por dia?");
let valorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${valorDia/horasTrabalho} por hora`)

p= horasTrabalho
t= valorDia

*/

/*Exercícios de escrita de código
1.
let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

d) foi impresso 'undefined', pois não foi atribuído um valor.*/

let nome = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?");

console.log(typeof nome);
console.log(typeof idade);

//f)apareceu os dois como strings

console.log("Olá", nome, ", você tem", idade, "anos.");

//2.

const chuva = prompt("Hoje está chovendo?");
const amendoim = prompt("Você gosta de amendoim?");
const strogonoff = prompt("Você gosta de strogonoff?");

console.log("Hoje está chovendo? -", chuva);
console.log("Você gosta de amendoim? -", amendoim);
console.log("Você gosta de strogonoff? -", strogonoff);

//3.

let a = 10
let b = 25
let c

c = a
a = b
b = c


console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b)

//desafio

let A = prompt("Digite um numero");
let B = prompt("Digite outro número");
let numeroA = Number(A)
let numeroB = Number(B)

C = (numeroA)+(numeroB);
d = (A)*(B);

console.log(A, "+", B, "=", C);
console.log(A, "x", B, "=", d);