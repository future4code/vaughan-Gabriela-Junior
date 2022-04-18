import { app, server } from "./app";
import { createUser } from "./endpoints/createUser";

app.post("/address", createUser)