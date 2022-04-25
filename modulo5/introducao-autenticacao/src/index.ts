import { server, app } from "./app";
import { v4 } from "uuid"

server

const id = v4();

console.log("Generate Id", id);

