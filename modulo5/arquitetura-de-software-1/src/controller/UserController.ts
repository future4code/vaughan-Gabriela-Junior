import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { SignupDTO } from "../types/SignUpDTO";

export class UserController{
    constructor(
        private userBusiness: UserBusiness
    ) {}

    signup = async (req: Request, res: Response) => {
        try {
            const {name, email, password, role} = req.body

            const newUser: SignupDTO = {
                name,
                email,
                password,
                role
            };

            const token = await this.userBusiness.signup(newUser)
            res.status(201).send({message: "Usuário cadastrado com sucesso!", token})

        } catch (error: any) {
            
        }
    }
}