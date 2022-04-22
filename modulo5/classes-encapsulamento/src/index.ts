import { Bank } from "./Bank";
import { Transaction } from "./Transaction";
import { UserAccount } from "./UserAccount";

// Exercício 1.

// a) Construtor serve para adicionarmos um novo objeto dentro da classe. Chamamos com new 'Classe'.


// b) A mensagem é impressa a quantidade de vezes que se cria um novo UserAccount. Nesse caso, 1 vez.
const newUser = new UserAccount("cpf", "joana", 23);

// c) Conseguimos ter acesso às propriedades privadas de uma classe através de uma função com a caracterísctica 'public'.

// Exercício 2.

const newTransaction = new Transaction("descrição", 123, "02/2022");

newUser.setTransaction(newTransaction);

// Exercício 3.

const newBank = new Bank([newUser]);

newBank.getAccounts();