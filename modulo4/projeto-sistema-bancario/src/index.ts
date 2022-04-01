import express, {Express} from 'express';
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

app.get("/users", (req, res) => {
    let statusCode = 400

    try {

        res.status(200).send(users);

    } catch (error) {

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
        }).flat(0);
        console.log(findBalance)
        res.status(200).send(findBalance);

    } catch (error) {


    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});