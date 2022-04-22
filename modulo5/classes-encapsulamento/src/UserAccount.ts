import { Transaction } from "./Transaction";

// Exercício 1, letra b)

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    public setTransaction(transaction: Transaction) {
        (this.transactions).push(transaction)
        console.log("Transaction feita")
        console.log(this.transactions)
    }

    public getCpf() {
        return this.cpf
    };

    public getName() {
        return this.name
    };

    public getAge() {
        return this.age
    };

    public getBalance() {
        return this.balance
    };

    public getTransactions() {
        return this.transactions
    };

    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  };