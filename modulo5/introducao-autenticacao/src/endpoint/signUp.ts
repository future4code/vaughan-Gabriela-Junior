import { Request, Response } from "express";
import { createUser } from "../data/createUser";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";

export const signUp = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        if (!email || email.indexOf("@") === -1) {
            throw new Error("Email inválido.")
        }
        if (!password || password.length < 6) {
            throw new Error("Senha inválida. É necessário ter mais de 6 caracteres.")
        }

        const id = generateId();

        await createUser(id, email, password)
        const token = generateToken({
            id,
        });

        res.status(201).send({
            token
        });

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send("Erro inesperado de servidor")

        } else if (error.message === "Email inválido") {
            res.status(400).send({ message: error.message })

        } else if (error.message === "Senha inválida. É necessário ter mais de 6 caracteres.") {
            res.status(400).send({ message: error.message })
            
        }

    }
}