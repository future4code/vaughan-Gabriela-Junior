export type Statement = {
    amount: number,
    date: string,
    description: string
};

export type User = {
    name: string,
    cpf: string,
    birthDate: string,
    balance: number,
    statement: Statement[],
};

export const users: User[] = [{
    name: "João",
    cpf: "123.456.789-12",
    birthDate: "12/03/1990",
    balance: 500,
    statement: [{
        amount: 200,
        date: "aaa",
        description: "aaaa"
    }]
    },
    {
    name: "Joana",
    cpf: "321.654.987-21",
    birthDate: "09/12/1987",
    balance: 1,
    statement: [{
        amount: 0,
        date: "",
        description: ""
    }]
    },
    {
    name: "Joaquina",
    cpf: "789.456.123-99",
    birthDate: "09/12/1987",
    balance: 0,
    statement: [{
        amount: 0,
        date: "",
        description: ""
    }]
    }
];