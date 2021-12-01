/* Exercícios de interpretação

Exercício 1.
a. undefined
b. null
c. 11
d. 3 (i = localização index)
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

Exercício 2.

O valor impresso será "SUBI NUM ÔNIBUS EM MIRROCOS 27"
*/

//Exercícios de escrita

//Exercício 1.

//const nomeDoUsuario = prompt("Digite seu nome");
//const emailDoUsuario = prompt("Digite seu email");

//console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o,e), ${nomeDoUsuario}!`);

//Exercício 2.

let comidasPreferidas = ["strogonoff", "batata frita", "risoto de cogumelo", "bolani", "bobó de mandioca"];

//a)

console.log(comidasPreferidas);

//b)

console.log("Essas são as minhas comidas preferidas:");
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);

//c)

const comidaUsuario = prompt("Qual sua comida preferida?");
comidasPreferidas [1] = comidaUsuario;

console.log(comidasPreferidas);

//Exercício 3.

//a

let listaDeTarefas

//b

const tarefa1 = prompt("Digite uma tarefa do dia que você precisa realizar");
const tarefa2 = prompt("Digite outra");
const tarefa3 = prompt("Digite mais uma");

listaDeTarefas = [tarefa1, tarefa2, tarefa3];

//c

console.log(listaDeTarefas);

//d

const tarefaFeita = prompt("Que tarefa você já realizou? 0, 1 ou 2");

//e
listaDeTarefas.splice(Number(tarefaFeita), 1);

//f

console.log(listaDeTarefas);