import express, { application } from "express";
import cors from 'cors';
import { users, posts } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server está rodando na porta 3003");
});

//Exercício 1
app.get("/", (req, res) => {
    console.log("Foi o endpoint")
    // res.send("Testany!")
    res.status(201).send("Endpoint criado!")
});

//Exercício 4.
app.get("/users", (req, res) => {
    console.log(users)
    res.status(201).send(users);
});

//Exercício 7.
app.get("/posts", (req, res) => {
    console.log(posts)
    res.status(201).send(posts);
});

//Exercício 8.
app.get("/posts/:userId", (req, res) => {
    const userId = req.params.userId
    const postsByUserId = posts.filter((post) => {
        if (Number(userId) === post.userId) {
            return post
        }
    });
    res.status(201).send(postsByUserId);
});

//Exercício 9.
app.delete("/posts/:id", (req, res) => {
    const postId = req.params.id;
    const deletePost = posts.filter((post) => {
        return Number(postId) !== post.id
    });
    console.table(deletePost)
    res.status(201).send(deletePost)
});

//Exercício 10.
app.delete("/users/:userId", (req, res) => {
    const userId = req.params.userId
    const deleteUser = users.filter((user) => {
        return Number(userId) !== user.id
    });
    res.status(201).send(deleteUser)
});

//Exercício 11
// https://documenter.getpostman.com/view/19294823/UVyoVxMq