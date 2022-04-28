import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const {name, email, password, role} = req.body

        if (!name || !email || !password || !role) {
            throw new Error ("É necessário preencher todos os campos.")
        };

        const userDatabase = new UserDatabase();
        const user = await userDatabase.findUserByEmail(email);

        if (user) {
            throw new Error("Esse email já foi cadastrado.")
        }

        const idGenerator = new IdGenerator();
        const id: string = idGenerator.generateId();

        const hashManager: HashManager = new HashManager();
        const hashPassword: string = hashManager.createHash(password);

        const newUser = new User(
            id,
            name,
            email,
            hashPassword,
            role
        );

        await userDatabase.createUser(newUser);

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({id, role});

        res.status(201).send({message: "Usuário criado com sucesso.", token})

    } catch (error: any) {
        switch (error.message) {
            case "Esse email já foi cadastrado.":
                res.status(409).send({message: error.message})
                break

            case "É necessário preencher todos os campos.":
                res.status(400).send({message: error.message})
                break

            default:
                res.status(500).send({message: error.message})
        }

    }
};