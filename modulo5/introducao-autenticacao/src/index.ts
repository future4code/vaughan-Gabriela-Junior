import { server, app } from "./app";
import { v4 } from "uuid"
import { signUp } from "./endpoint/signUp";
import { login } from "./endpoint/login";
import { getUserInformation } from "./endpoint/getUserInformation";

app.post("/user/signup", signUp);

app.post("/user/login", login)

app.get("/user/profile", getUserInformation)