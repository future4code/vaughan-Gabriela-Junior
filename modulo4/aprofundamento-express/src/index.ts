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

//Exercicio 6.
app.put("/completed/:id", (req, res) => {
    const taskId = req.params.id

    const newCompleted = toDoList.filter((task) => {
        return Number(taskId) === task.id
    }).map((task) => {
        if (task.completed === true) {
            return { userId: task.userId, id: task.id, title: task.title, completed: false }
        } else if (task.completed === false) {
            return { userId: task.userId, id: task.id, title: task.title, completed: true }
        }
    })
    console.log(newCompleted)
    res.status(201).send(newCompleted);
});

//Exercício 7.
app.delete("/deletetask/:id", (req, res) => {
    const taskId = req.params.id;

    const deleteTask = toDoList.filter((task) => {
        if (task.id !== Number(taskId)) {
            return task
        }
    });

    res.status(201).send(deleteTask);
});

//Exercício 8.
app.get("/todos/:userId", (req, res) => {
    const userId = req.params.userId

    const userTasks = toDoList.filter((task) => {
        return Number(userId) === task.userId
    });

    res.status(201).send(userTasks);
});

//Exercício 9.
// https://documenter.getpostman.com/view/19294823/UVyoXynF

//Exercício 10.
app.get("/todobyuser/:id", (req, res) => {
    const userId = req.params.id

    const userTasks = toDoList.filter((task) => {
        return Number(userId) === task.userId
    });

    const otherTasks = toDoList.filter((task) => {
        return Number(userId) !== task.userId
    });

    const newToDoList = {
        todos: [
            {
                selectedUser: [...userTasks],
                others: [...otherTasks]
            }
        ]
    };

    res.status(201).send(newToDoList);
});