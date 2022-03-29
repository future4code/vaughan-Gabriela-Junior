import express from "express";
import cors from 'cors';
import { toDoList } from "./data";
import { userInfo } from "os";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server está rodando na porta 3003");
});

// Exercício 1.
app.get("/ping", (req, res) => {
    res.send("pong")
});

//Exercício 4.
app.get("/todos/:completed", (req, res) => {
    const isCompleted = req.params.completed

    const tasksCompleted = toDoList.filter((item) => {
        return String(item.completed) === isCompleted
    });

    res.status(201).send(tasksCompleted)
});

//Exercicio 5.
app.post("/createtask", (req, res) => {
    const newTitle = req.body.title
    const isCompleted = req.body.completed

    const newTask = {
        userId: Date.now().toString(),
        id: Date.now().toString(),
        title: newTitle,
        completed: isCompleted
    };

    toDoList.push(newTask)
    res.status(201).send(toDoList)
});

