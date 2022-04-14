import { app, server } from "./app";
import { closeConnection, createTables } from "./data/migrations";
import { createProduct } from "./endpoints/createProduct";
import { createUser } from "./endpoints/createUser";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";

app.post("/users", createUser)

app.get("/users", getAllUsers)

app.post("/products", createProduct)

app.get("/products", getAllProducts)