import express, { Express, Response, Request, response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

// 1.

const createUser = async (name: string, nickname: string, email: string): Promise<any> => {
    await connection("ToDoUser")
        .insert({
            id: Date.now(),
            name: name,
            nickname: nickname,
            email: email
    })
};

app.post("/user", async (req: Request, res: Response) => {
    try {
        const {name, nickname, email} = req.body
        

        if (!name || !nickname || !email) {
            throw new Error ("Todos os campos devem ser preenchidos.")

        } else {
            await createUser(name, nickname, email);
            res.status(201).send("Usuário criado com sucesso!")

        }
        
    } catch (error: any) {
        switch (error.message) {
            case "Todos os campos devem ser preenchidos.":
                res.status(422).send(error.message)
            default:
                res.status(500).send(error.message);
        }
    }
});

// 2.

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const user = await connection("ToDoUser").where({id: id});

        const userNameAndID = user.map((user) => {
            return {id: user.id, name: user.name};
        });

        if (user.length === 0) {
            throw new Error("Usuário não encontrado.")
        } else {
            res.status(200).send(userNameAndID)

        };

    } catch (error: any) {
        switch (error.message) {
            case "Usuário não encontrado":
                res.status(404).send(error.message)
            default:
                res.status(500).send(error.message);
        }
    }
});

// 3. 

const changeUser = async (id: string, name: string, nickname: string): Promise<any> => {
    await connection("ToDoUser").update({
        name,
        nickname
    }).where({id: id})
};

app.put("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const {name, nickname} = req.body

        if (!id || !name || !nickname) {
            throw new Error ("Todos os campos devem ser preenchidos.")
        } else {
            await changeUser(id, name, nickname)
            res.status(200).send("Usuário modificado com sucesso!")
        }
      

    } catch (error: any) {
        switch (error.message) {
            case "Todos os campos devem ser preenchidos.":
                res.status(404).send(error.message)
            default:
                res.status(500).send(error.message);
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