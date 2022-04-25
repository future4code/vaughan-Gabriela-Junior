import { server, app } from "./app";
import { v4 } from "uuid"
import { signUp } from "./endpoint/signUp";

app.post("/user/signup", signUp);