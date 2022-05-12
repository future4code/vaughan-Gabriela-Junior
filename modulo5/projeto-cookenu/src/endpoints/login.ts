import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User, USER_ROLES } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body

        if (!email || !password) {
            throw new Error ("É necessário preencher todos os campos.")
        };

        const userDatabase = new UserDatabase();
        const user = await userDatabase.findUserByEmail(email);

        if (!user) {
            throw new Error("Esse email não está cadastrado.")
        };

        const hashManager: HashManager = new HashManager();
        const correctPassword = hashManager.compareHash(password, user.getPassword())

        if (!correctPassword) {
            throw new Error("Email ou senha incorreta.")
        }

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({id: user.getId(), role: user.getRole() as USER_ROLES});

        res.status(201).send({message: "Usuário logado com sucesso.", token})

    } catch (error: any) {
        switch (error.message) {
            case "Esse email não está cadastrado.":
                res.status(409).send({message: error.message})
                break

            case "É necessário preencher todos os campos.":
                res.status(400).send({message: error.message})
                break


            case "Email ou senha incorreta.":
                res.status(400).send({message: error.message})
                break
                
            default:
                res.status(500).send({message: error.message})
        }

    }
};