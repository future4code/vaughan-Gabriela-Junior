import { app, server } from "./app";
import { closeConnection, createTables } from "./data/migrations";
import { createProduct } from "./endpoints/createProduct";
import { createPurchase } from "./endpoints/createPurchase";
import { createUser } from "./endpoints/createUser";
import { getUserPurchases } from "./endpoints/gerUserPurchases";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";

app.post("/users", createUser)

app.get("/users", getAllUsers)

app.post("/products", createProduct)

app.get("/products", getAllProducts)

app.post("/purchases", createPurchase)

app.get("/users/:userId/purchases", getUserPurchases)