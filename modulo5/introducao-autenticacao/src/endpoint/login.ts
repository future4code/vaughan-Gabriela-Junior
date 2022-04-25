import { Request, Response } from "express"
import { generateToken } from "../services/generateToken";
import { getUserByEmail } from "./getUserByEmail"

export const login = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body

        if (!email || email.indexOf("@") === -1) {
            throw new Error("Email inválido.")
        }

        const user = await getUserByEmail(email);

        if (user.password !== password) {
            throw new Error ("Senha inválida.")
        }

        const token = generateToken({
            id: user.id
        });

        res.status(200).send({token});

    } catch (error: any) {

        if (error.message === "Email inválido") {
            res.status(400).send({ message: error.message })

        } else if (error.message === "Senha inválida.") {
            res.status(400).send({ message: error.message })
            
        }

    }
}