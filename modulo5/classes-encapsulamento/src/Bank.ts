import { UserAccount } from "./UserAccount";

// Exercício 3.

export class Bank {
    private accounts: UserAccount[];

    public setAccount(account: UserAccount) {
        (this.accounts).push(account);
    }

    public getAccounts () {
        console.log("getter bank", this.accounts)
        return this.accounts
    };

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
        console.log("Construtor Bank")
        console.log(this.accounts)
    };
};