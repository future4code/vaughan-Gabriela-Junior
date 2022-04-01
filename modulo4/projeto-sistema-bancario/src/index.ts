import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { Statement, User, users } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users", (req, res) => {
    let statusCode = 400
    try {
        const newName: string = req.body.name
        const newCPF: string = req.body.cpf
        const newDate: string = req.body.birthDate
        const dateToday: Date = new Date;
        let arrayBirthDate: string[] = []
        let cpfFound = false

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
        console.log(age)

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
                res.status(400).send(error.message)
                break
            case "Esse CPF já existe.":
                res.status(400).send(error.message)
                break
            default:
                res.status(500).send(error.message)
                break
        }
    }
});

app.post("/users/balance", (req, res) => {
    let statusCode = 400

    try {
        const username: string = req.body.name;
        const userCPF: string = req.body.cpf;
        const userBalance: number = req.body.balance as number

        const newBalance = users.filter((user) => {
            return (username === user.name && userCPF === user.cpf)
        }).map((user) => {
            const addBalance = user.balance + userBalance
            return addBalance
        });

        const newUserBalance = {
            name: username,
            cpf: userCPF,
            balance: newBalance
        };

        res.status(200).send(newUserBalance)


    } catch (error: any) {

    }
});

app.post("/users/statement/:cpf", (req, res) => {
    let statusCode = 400

    try {

        const cpf: string = req.params.cpf
        const payBill: number = req.body.amount as number
        let dateBill: string = req.body.date
        const descriptionBill: string = req.body.description
        const arrayToday = []
        const arrayBillDate = []
        const dateToday = ((new Date).toLocaleDateString()).split("/");
        arrayToday.push(dateToday[1], dateToday[0], dateToday[2]);
        const todayFormatted = arrayToday.join("/");

        if (!dateBill) {
            dateBill = todayFormatted;
        };

        const newStatement: Statement = {
            amount: payBill,
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
            const sumBalance = user.balance - payBill
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
                return { name: user.name, cpf: user.cpf, birthDate: user.birthDate, balance: addBill, statement: user.statement }
            });

            res.status(200).send(addStatement);
        };

    } catch (error: any) {
        switch (error.message) {
            case "Não foi possível cadastrar essa data. Favor colocar a partir do dia atual.":
                res.status(400).send(error.message)
                break
            case "Não foi possível pagar essa conta pois é maior que seu saldo.":
                res.status(400).send(error.message)
                break
            default:
                res.status(400).send(error.message)
                break
        };
    };
});

app.get("/users", (req, res) => {
    let statusCode = 400

    try {

        res.status(200).send(users);

    } catch (error: any) {

    }
});

app.get("/users/balance/:cpf/:name", (req, res) => {
    let statusCode = 400

    try {
        const cpf: string = req.params.cpf
        const name: string = req.params.name

        const findBalance = users.filter((user) => {
            return cpf === user.cpf && name === user.name
        }).map((user) => {
            return user.balance
        });
        console.log(findBalance)
        res.status(200).send(findBalance);

    } catch (error: any) {


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