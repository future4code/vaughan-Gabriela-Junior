//Exercício 2.

export class Transaction {
    private description: string;
    private value: number;
    private date: string;

    public getDescription() {
        return this.description
    };

    public getValue() {
        return this.value
    };

    public getDate() {
        return this.date
    };

    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date;
        console.log("Construtor da classe Transaction")
    };
};