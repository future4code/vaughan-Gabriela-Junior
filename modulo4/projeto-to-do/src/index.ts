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

// app.get("/task/:id", async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id
//         const task = await connection("ToDoTask").join('ToDoUser', 'ToDoTask.creator_id', '=', 'ToDoUser.id').where({ 'ToDoTask.id': id });
//         console.log(task)
//         if (task.length === 0) {
//             throw new Error("Tarefa não encontrada.")
//         } else {
//             const taskMap = task.map((task) => {
//                 return {
//                     taskId: task.id,
//                     title: task.title,
//                     description: task.description,
//                     limitDate: task.limit_date.toLocaleDateString('pt-br'),
//                     status: task.status,
//                     creatorUserId: task.creator_id,
//                     creatorUserNickname: task.nickname
//                 }
//             });

//             res.status(200).send(taskMap);
//         }

//     } catch (error: any) {
//         switch (error.message) {
//             case "Tarefa não encontrada.":
//                 res.status(404).send(error.message)
//             default:
//                 res.status(500).send(error.message);
//         }
//     }
// });

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

        const task = await connection("ToDoTask")
            .select("ToDoTask.*", "ToDoUser.nickname")
            .join('ToDoUser', 'ToDoTask.creator_id', 'ToDoUser.id')
            .where({ 'ToDoUser.id': creatorUserId });

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
            throw new Error("É necessário informar o usuário.")

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

// 9.

const assignTaskToUser = async (taskId: string, responsibleUserId: string): Promise<any> => {
    await connection('ToDoUserTaksRelation')
        .insert({
            task_id: taskId,
            responsible_user_id: responsibleUserId
        });
};

app.post("/task/responsible", async (req: Request, res: Response) => {
    try {
        const { taskId, responsibleUserId } = req.body

        if (!taskId || !responsibleUserId) {
            throw new Error("É preciso preencher todos os campos.")

        } else {

            await assignTaskToUser(taskId, responsibleUserId)
            res.status(200).send("Tarefa atribuída ao usuário com sucesso.")
        };

    } catch (error: any) {
        switch (error.message) {
            case "É preciso preencher todos os campos.":
                res.status(422).send(error.message)
            default:
                res.status(500).send(error.message);
        }
    };
});

// 10.

app.get("/task/:id/responsible", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const userByTask = await connection('ToDoTask')
            .join('ToDoUserTaksRelation', 'ToDoTask.id', 'ToDoUserTaksRelation.task_id')
            .join('ToDoUser', 'ToDoUser.id', 'ToDoUserTaksRelation.responsible_user_id')
            .where('ToDoTask.id', id);

        if (userByTask.length === 0) {
            throw new Error("Tarefa não encontrada.")
        } else {

            const userByTaskMap = userByTask.map((task) => {
                return {
                    id: task.responsible_user_id,
                    nickname: task.nickname
                }
            });

            res.status(200).send(userByTaskMap)
        };

    } catch (error: any) {
        switch (error.message) {
            case "Tarefa não encontrada.":
                res.status(422).send(error.message)
            default:
                res.status(500).send(error.message);
        }
    };
});

// 11.

app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const task = await connection('ToDoTask')
            .select("ToDoTask.*", "ToDoUser.nickname")
            .join('ToDoUser', 'ToDoTask.creator_id', 'ToDoUser.id')
            .join('ToDoUserTaksRelation', 'ToDoTask.id', 'ToDoUserTaksRelation.task_id')
            .where('ToDoTask.id', id);

        console.log(task)

        const userResponsible = await connection('ToDoTask')
            .join('ToDoUserTaksRelation', 'ToDoTask.id', 'ToDoUserTaksRelation.task_id')
            .join('ToDoUser', 'ToDoUserTaksRelation.responsible_user_id', 'ToDoUser.id')
            .where('ToDoTask.id', id)

        if (task.length === 0) {
            throw new Error("Tarefa não encontrada.")

        } else {
            const mapTask = task.map((task) => {
                const mapUserResponsible = userResponsible.map((user) => {
                    return {
                        taskId: task.id,
                        title: task.title,
                        description: task.description,
                        limitDate: task.limit_date.toLocaleDateString('pt-br'),
                        creatorUserId: task.creator_id,
                        creatorUserNickname: task.nickname,
                        responsibleUsers: [
                            {
                                id: user.responsible_user_id,
                                nickname: user.nickname
                            }
                        ]
                    }
                })
                return mapUserResponsible
            });

            res.status(200).send(mapTask)
        }

    } catch (error: any) {
        switch (error.message) {
            case "Tarefa não encontrada.":
                res.status(422).send(error.message)
            default:
                res.status(500).send(error.message);
        }

    }
});


// 12.

const changeStatus = async (status: string, id: string): Promise<any> => {

    await connection("ToDoTask")
        .update({
            status: status
        }).where({ id: id });
}

app.put("/task/status/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const status = req.body.status

        if (!status) {
            throw new Error("Todos os campos devem ser preenchidos.")
        } else {
            await changeStatus(status, id);
            res.status(200).send("Status modificado com sucesso.")
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

// 13.

app.get("/tasks/search", async (req: Request, res: Response) => {
    try {
        const status = req.query.status

        if (!status) {
            throw new Error("Todos os campos devem ser preenchidos.")
        } else {
            const task = await connection('ToDoTask')
                .select('ToDoTask.*', 'ToDoUser.nickname')
                .join('ToDoUser', 'ToDoTask.creator_id', 'ToDoUser.id')
                .where({ status: status })

            const taskMap = task.map((task) => {
                return {
                    tasks: [{
                        taskId: task.id,
                        title: task.title,
                        description: task.description,
                        limitDate: task.limit_date.toLocaleDateString('pt-br'),
                        creatorUserId: task.creator_id,
                        creatorUserNickname: task.nickname
                    }]
                }
            });

            res.status(200).send(taskMap)
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

// 14.

app.get("/tasks/delayed/:status", async (req: Request, res: Response) => {
    try {
        const status = req.params.status
        const task = await connection("ToDoTask")
            .select("ToDoTask.*", "ToDoUser.nickname")
            .join("ToDoUser", "ToDoTask.creator_id", "ToDoUser.id")
            .where({ status: status })

        if (!status) {
            throw new Error("Status deve ser informado.")

        } else if (task.length === 0) {
            throw new Error("Tarefa não encontrada.")

        } else {
            const tasksDelayed = task.map((task) => {
                const isDelayed = ((task.limit_date.getTime() - Date.now()) / (1000 * 60 * 60 * 24) % 7)
                if (isDelayed > 1 && isDelayed) {
                    return {
                        tasks: [{
                            taskId: task.id,
                            title: task.title,
                            description: task.description,
                            limitDate: task.limit_date.toLocaleDateString('pt-br'),
                            creatorUserId: task.creator_id,
                            creatorUserNickname: task.nickname
                        }]
                    }
                }
            });

            res.status(200).send(tasksDelayed)
        }
    } catch (error: any) {
        switch (error.message) {
            case "Status deve ser informado.":
                res.status(422).send(error.message)
            case "Tarefa não encontrada.":
                res.status(404).send(error.message)
            default:
                res.status(500).send(error.message);
        }
    }
});

// 15.

app.delete("/tasks/:taskId/responsible/:responsibleUserId", async (req: Request, res: Response) => {
    try {
        const { taskId, responsibleUserId } = req.params
        await connection("ToDoUserTaksRelation").del().where({ 'task_id': taskId }).andWhere('responsible_user_id', responsibleUserId);

        res.status(200).send("Usuário retirado com sucesso!")

    } catch (error: any) {
        res.status(400).send(error.message)

    }
});

// 16.

// 17.

app.get("/tasks", async (req: Request, res: Response) => {
    try {
        const query = req.query.query

        if (!query) {
            throw new Error("É necessário preencher todos os campos.")
        } else {
            const findTask = await connection("ToDoTask")
                .where('title', 'like', `%${query}%`)
                .orWhere('description', 'like', `%${query}%`)

            res.status(200).send(findTask)
        }

    } catch (error: any) {
        switch (error.message) {
            case "É necessário preencher todos os campos.":
                res.status(422).send(error.message)
            default:
                res.status(500).send(error.message);
        }
    }
});

// 18.

// 19.

app.delete("/task/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const task = await connection("ToDoTask").where({ id: id });

        if (task.length === 0) {
            throw new Error("Tarefa não encontrada.")
        } else {
            await connection("ToDoUserTaksRelation").del().where({ 'task_id': id });
            await connection("ToDoTask").del().where({ id: id });

            res.status(200).send("Tarefa deletada com sucesso.")
        }
    } catch (error: any) {
        switch (error.message) {
            case "Tarefa não encontrada.":
                res.status(422).send(error.message)
            default:
                res.status(500).send(error.message);
        }
    };
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});