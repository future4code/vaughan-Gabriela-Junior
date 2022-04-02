import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { Statement, User, users } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users", (req, res) => {

    try {
        const newName: string = req.body.name
        const newCPF: string = req.body.cpf
        const newDate: string = req.body.birthDate
        const dateToday: Date = new Date;
        let arrayBirthDate: string[] = []
        let cpfFound: boolean = false

        const newUser: User = {
            name: newName,
            cpf: newCPF,
            birthDate: newDate,
            balance: 0,
            statement: []
        };

        for (let i = 0; i < users.length; i++) {
            if (users[i].cpf === newCPF) {
                cpfFound = true
            }
        };

        let birthDateSplit = newDate.split("/");
        arrayBirthDate.push(birthDateSplit[1], birthDateSplit[0], birthDateSplit[2]);
        const formattedBirthDate: number = new Date(Date.parse(arrayBirthDate.join("/"))).getTime();
        const age: number = Math.floor((dateToday.getTime() - formattedBirthDate) / 31536000000)

        if (age < 18) {

            throw new Error("Precisa ter no mínimo 18 anos para se cadastrar.");

        } else if (cpfFound === true) {

            throw new Error("Esse CPF já existe.");

        } else {

            users.push(newUser);

            res.status(201).send("Usuário criado com sucesso!")
        };

    } catch (error: any) {
        switch (error.message) {
            case "Precisa ter no mínimo 18 anos para se cadastrar.":
                res.status(422).send(error.message)
                break
            case "Esse CPF já existe.":
                res.status(409).send(error.message)
                break
            default:
                res.status(500).send(error.message)
                break
        }
    }
});

app.post("/users/statement/:cpf", (req, res) => {

    try {

        const cpf: string = req.params.cpf
        const payBill: number = req.body.amount as number
        let dateBill: string = req.body.date
        const descriptionBill: string = req.body.description
        const arrayBillDate = []
        let dateToday: string = (new Date).toLocaleDateString('pt-br')

        if (!dateBill) {
            dateBill = dateToday;
        };

        const newStatement: Statement = {
            amount: - payBill,
            date: dateBill,
            description: descriptionBill
        };

        let paymentDateSplit = dateBill.split("/");
        arrayBillDate.push(paymentDateSplit[1], paymentDateSplit[0], paymentDateSplit[2]);
        const formattedBillDate: number = new Date(Date.parse(arrayBillDate.join("/"))).getTime();
        const isPast = Math.floor((formattedBillDate - (new Date).getTime()) / (1000 * 60 * 60 * 24) % 7);

        const addBill = users.filter((user) => {
            return cpf === user.cpf
        }).map((user) => {
            const sumBalance = user.balance + newStatement.amount
            return sumBalance
        });

        if (isPast < -1) {
            throw new Error("Não foi possível cadastrar essa data. Favor colocar a partir do dia atual.")

        } else if (addBill[0] < 0) {

            throw new Error("Não foi possível pagar essa conta pois é maior que seu saldo.")

        } else {

            const addStatement = users.filter((user) => {
                return cpf === user.cpf
            }).map((user) => {
                (user.statement).push(newStatement)
                return { name: user.name, cpf: user.cpf, birthDate: user.birthDate, balance: user.balance, statement: user.statement }
            });

            res.status(201).send(addStatement);
        };

    } catch (error: any) {
        switch (error.message) {
            case "Não foi possível cadastrar essa data. Favor colocar a partir do dia atual.":
                res.status(422).send(error.message)
                break
            case "Não foi possível pagar essa conta pois é maior que seu saldo.":
                res.status(422).send(error.message)
                break
            default:
                res.status(400).send(error.message)
                break
        };
    };
});

app.post("/users/transfer", (req, res) => {

    try {
        const username: string = req.body.name
        const userCpf: string = req.body.cpf
        const recipientName: string = req.body.recipientName
        const recipientCPF: string = req.body.recipientCpf
        const amount: number = req.body.amount

        const newTransfer = {
            name: username,
            cpf: userCpf,
            recipientName,
            recipientCpf: recipientCPF,
            amount
        };

        let lessThanAmount: boolean = false
        let userFound: boolean = false
        let recipientFound: boolean = false

        for (let i = 0; i < users.length; i++) {
            if (users[i].cpf === userCpf && users[i].name === username) {
                userFound = true
                if (amount > users[i].balance) {
                    lessThanAmount = true
                }
            } else if (users[i].cpf === recipientCPF && users[i].name === recipientName) {
                recipientFound = true
            }
        };

        if (lessThanAmount === true) {

            throw new Error("Seu saldo é menor que o valor de transferência.")

        } else if (userFound === false) {

            throw new Error("Usuário que está enviando a transferência não encontrado.")

        } else if (recipientFound === false) {

            throw new Error("Usuário que está recebendo a transferência não encontrado.")

        } else {

            const userStatement: Statement = {
                amount: - newTransfer.amount,
                date: (new Date).toLocaleDateString('pt-br'),
                description: `Transferência para ${newTransfer.recipientName}`
            };

            const recipientStatement: Statement = {
                amount: newTransfer.amount,
                date: userStatement.date,
                description: `Transferência recebida de ${newTransfer.name}`
            };

            const userFilter = users.filter((user) => {
                return userCpf === user.cpf
            }).map((user) => {
                (user.statement).push(userStatement)
                return { name: user.name, cpf: user.cpf, birthDate: user.birthDate, balance: user.balance, statement: user.statement }
            });

            const recipientFilter = users.filter((user) => {
                return recipientCPF === user.cpf
            }).map((user) => {
                (user.statement).push(recipientStatement)
                return { name: user.name, cpf: user.cpf, birthDate: user.birthDate, balance: user.balance, statement: user.statement };
            });

            const arrayTransfer = [userFilter, recipientFilter]

            res.status(200).send(arrayTransfer);
        }

    } catch (error: any) {
        switch (error.message) {
            case "Seu saldo é menor que o valor de transferência.":
                res.status(422).send(error.message)
                break
            case "Usuário que está enviando a transferência não encontrado.":
                res.status(404).send(error.message)
                break
            case "Usuário que está recebendo a transferência não encontrado.":
                res.status(404).send(error.message)
                break
            default:
                res.status(500).send(error.message)
                break
        }

    };

});

app.put("/users/balance", (req, res) => {

    try {
        const userCPF: string = req.body.cpf
        const username: string = req.body.name
        const userBalance: number = req.body.balance as number
        let userFound: boolean = false

        const newBalance = {
            name: username,
            cpf: userCPF,
            balance: userBalance
        };

        for (let i = 0; i < users.length; i++) {
            if (users[i].name === username && users[i].cpf === userCPF) {
                userFound = true
            }
        }

        if (userFound === false) {
            throw new Error ("Usuário não encontrado.")

        } else {

            const returnBalance = {
                balance: newBalance.balance,
                balanceDate: new Date,
                balanceDescription: "Depósito de dinheiro"
            }
    
            const sumBalance = users.filter((user) => {
                return (userCPF === user.cpf)
            }).map((user) => {
                const addBalance = user.balance + returnBalance.balance
                return {totalBalance: addBalance}
            });
    
            const arrayBalance = [returnBalance, sumBalance]
    
            res.status(200).send(arrayBalance)

        };

    } catch (error: any) {
        switch(error.message) {
            case "Usuário não encontrado.":
                res.status(404).send(error.message)
                break
            default:
                res.status(500).send(error.message)
                break
        }

    }
});

app.put("/users/balance/update", (req, res) => {
//Não ta funcionando :(
    try {
        const cpf: string = req.body.cpf

        const userBalance = {
            cpf
        }

        let sum = 0
        for (let i = 0; i < users.length; i++) {
            if (users[i].cpf === userBalance.cpf) {
                for (let j = 0; j < users[i].statement.length; j++) {
                    sum = sum + (users[i].statement[j].amount)

                    return sum
                }
            }
        };
        
        const updateBalance = users.filter((user) => {
            return userBalance.cpf === user.cpf
        }).map((user) => {
            let newBalance = user.balance - sum
            return { balance: newBalance }
        });

        res.status(200).send(updateBalance)


    } catch (error: any) {

    }

});

app.get("/users", (req, res) => {

    try {

        res.status(200).send(users);

    } catch (error: any) {

    }
});

app.get("/users/balance/:cpf/:name", (req, res) => {

    try {
        const cpf: string = req.params.cpf
        const name: string = req.params.name
        let cpfFound: boolean = false
        let nameFound: boolean = false


        for (let i = 0; i < users.length; i++) {
            if (users[i].cpf === cpf) {
                cpfFound = true
            }
            if (users[i].name === name) {
                nameFound = true
            }
        };

        if (cpfFound === false) {
            throw new Error("CPF não encontrado.")
        } else if (nameFound === false) {
            throw new Error("Nome não encontrado")
        } else {
            const findBalance = users.filter((user) => {
                return cpf === user.cpf && name === user.name
            }).map((user) => {
                return user.balance
            });

            res.status(200).send(findBalance);
        }

    } catch (error: any) {
        switch (error.message) {
            case "CPF não encontrado.":
                res.status(404).send(error.message)
                break
            case "Nome não encontrado.":
                res.status(404).send(error.message)
                break
            default:
                res.status(500).send(error.message)
                break
        }
    }
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});