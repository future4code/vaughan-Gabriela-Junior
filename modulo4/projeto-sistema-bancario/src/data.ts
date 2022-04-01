type Balance = {
    amount: number,
    date: string,
    description: string
};

type User = {
    name: string,
    cpf: string,
    birthDate: string,
    balance: Balance[],
};

const users: User[] = [{
    name: "João",
    cpf: "123.456.789-12",
    birthDate: "12/03/1990",
    balance: [{
        amount: 0,
        date: "",
        description: ""
    }]
    },
    {
    name: "Joana",
    cpf: "321.654.987-21",
    birthDate: "09/12/1987",
    balance: [{
        amount: 0,
        date: "",
        description: ""
    }]
    },
    {
    name: "Joaquina",
    cpf: "789.456.123-99",
    birthDate: "09/12/1987",
    balance: [{
        amount: 0,
        date: "",
        description: ""
    }]
    }
];