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
        const { name, nickname, email } = req.body


        if (!name || !nickname || !email) {
            throw new Error("Todos os campos devem ser preenchidos.")

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
        const user = await connection("ToDoUser").where({ id: id });

        const userNameAndID = user.map((user) => {
            return { id: user.id, name: user.name };
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
    }).where({ id: id })
};

app.put("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { name, nickname } = req.body

        if (!id || !name || !nickname) {
            throw new Error("Todos os campos devem ser preenchidos.")
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

// 4.

const createTask = async (title: string, description: string, limitDate: Date, creatorUserId: string): Promise<any> => {
    await connection("ToDoTask")
        .insert({
            id: Date.now().toString(),
            title: title,
            description: description,
            limit_date: limitDate,
            creator_id: creatorUserId
        });
};

app.post("/task", async (req: Request, res: Response) => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body
        console.log(new Date(limitDate))
        const dateFormatted = new Date(limitDate);

        if (!title || !description || !limitDate || !creatorUserId) {
            throw new Error("Todos os campos devem ser preenchidos.")
        } else {
            await createTask(title, description, dateFormatted, creatorUserId)
            res.status(201).send("Tarefa criada com sucesso!")
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

//5.

app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const task = await connection("ToDoTask").join('ToDoUser', 'ToDoTask.creator_id', '=', 'ToDoUser.id').where({ 'ToDoTask.id': id });

        if (task.length === 0) {
            throw new Error("Tarefa não encontrada.")
        } else {
            const taskMap = task.map((task) => {
                return {
                    taskId: task.id,
                    title: task.title,
                    description: task.description,
                    limitDate: task.limit_date.toLocaleDateString('pt-br'),
                    status: task.status,
                    creatorUserId: task.creator_id,
                    creatorUserNickname: task.nickname
                }
            });

            res.status(200).send(taskMap);
        }

    } catch (error: any) {
        switch (error.message) {
            case "Tarefa não encontrada.":
                res.status(404).send(error.message)
            default:
                res.status(500).send(error.message);
        }
    }
});

// 6.

app.get("/users", async (req: Request, res: Response): Promise<any> => {
    try {
        const allTasks = await connection("ToDoUser")

        res.status(200).send(allTasks)

    } catch (error: any) {
        res.status(500).send(error.message);
    }
});

// 7.

app.get("/task", async (req: Request, res: Response): Promise<any> => {
    try {
        const creatorUserId = req.query.creatorUserId
        const task = await connection("ToDoTask").join('ToDoUser', 'ToDoTask.creator_id', '=', 'ToDoUser.id').where({ 'ToDoUser.id': creatorUserId });

        if (!creatorUserId) {
            throw new Error("É necessário informar o usuário.")
        } else {
            const taskMap = task.map((task) => {
                return {
                    taskId: task.id,
                    title: task.title,
                    description: task.description,
                    limitDate: task.limit_date.toLocaleDateString('pt-br'),
                    creatorUserId: task.creator_id,
                    status: task.status,
                    creatorUserNickname: task.nickname
                }
            })
            res.status(200).send(taskMap);
        }

    } catch (error: any) {
        switch (error.message) {
            case "É necessário informar o usuário.":
                res.status(422).send(error.message)
            default:
                res.status(500).send(error.message);
        }
    };
});

// 8.

app.get("/user", async (req: Request, res: Response) => {
    try {
        const query = req.query.query
        const user = await connection('ToDoUser').where('nickname', 'like', `%${query}%`).orWhere('email', 'like', `%${query}%`);

        if (!query) {
            throw new Error ("É necessário informar o usuário.")

        } else {
            const userMap = user.map((user) => {
                return {
                    id: user.id,
                    nickname: user.nickname
                }
            });

            res.status(200).send(userMap)
        }

    } catch (error: any) {
        switch (error.message) {
            case "É necessário informar o usuário.":
                res.status(422).send(error.message)
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