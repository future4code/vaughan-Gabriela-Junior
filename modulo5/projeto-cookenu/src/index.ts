import { app } from "./app";
import { Migrations } from "./data/Migrations";
import { createRecipe } from "./endpoints/createRecipe";
import { getOtherProfile } from "./endpoints/getOtherProfile";
import { getOwnProfile } from "./endpoints/getOwnProfile";
import { login } from "./endpoints/login";
import { signUp } from "./endpoints/signUp";

// Migrations.createTables()
//     .finally(Migrations.closeConnection)

app.post("/signup", signUp);
app.post("/login", login);

app.get("/user/profile", getOwnProfile);
app.get("/user/:id", getOtherProfile);

app.post("/recipe", createRecipe);