import { app } from "./app";
import { getAllUsers, getAllUsersByName, getAllUsersByPage, getAllUsersByType, getAllUsersSorted } from "./endpoints/getAllUsers";

// app.get("/user", getAllUsersByName)
app.get("/user", getAllUsers)
// app.get("/user/:type", getAllUsersByType)
// app.get("/users", getAllUsersSorted)
app.get("/users", getAllUsersByPage)
