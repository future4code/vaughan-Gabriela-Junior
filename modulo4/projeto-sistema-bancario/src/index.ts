import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { Statement, User, users } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
    res.send("Api funcionando!")
});

app.post("/users", (req, res) => {
    let statusCode = 400
    try {
        const newName = req.body.name
        const newCPF = req.body.cpf
        const newDate = req.body.birthDate

        const newUser: User = {
            name: newName,
            cpf: newCPF,
            birthDate: newDate,
            balance: 0,
            statement: []
        };

        users.push(newUser);

        res.status(201).send("Usuário criado com sucesso!")

    } catch (error: any) {
        res.status(400).send(error.message)
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
        })

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
        const dateBill: string = req.body.dateBill
        const descriptionBill: string = req.body.description

        const newStatement: Statement = {
            amount: payBill,
            date: dateBill,
            description: descriptionBill
        };

        const addBill = users.filter((user) => {
            return cpf === user.cpf
        }).map((user) => {
            const sumBalance = user.balance - payBill
            return sumBalance
        });

        console.log("addBill", addBill)

        const addStatement = users.filter((user) => {
            return cpf === user.cpf
        }).map((user) => {
            (user.statement).push(newStatement)
            return {name: user.name, cpf: user.cpf, birthDate: user.birthDate, balance: addBill, statement: user.statement}
        });

        res.status(200).send(addStatement);

    } catch (error) {

    }
})

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