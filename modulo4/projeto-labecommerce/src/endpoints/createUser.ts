import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../types";

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body

        const newUserLogin: User = {
            id: String(Date.now()),
            name,
            email,
            password
        };

        if (!name || !email || !password) {
            throw new Error("Todos os campos devem ser preenchidos.")
        } else {
            await connection("labecommerce_users")
                .insert(newUserLogin)
            res.status(200).send("Usuário cadastrado com sucesso!")
        };

    } catch (error: any) {
        switch (error.message) {
            case "Todos os campos devem ser preenchidos.":
                res.status(400).send({ message: error.message });
                break
            default:
                res.status(400).send({ message: error.message })
                break
        }
    }
};