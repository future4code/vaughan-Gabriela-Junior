import { Request, Response } from "express";
import { SignupDTO } from "../types/SignUpDTO";

export class UserController{
    signup = async (req: Request, res: Response) => {
        try {
            const {name, email, password, role} = req.body

            const newUser: SignupDTO = {
                name,
                email,
                password,
                role
            };

        } catch (error: any) {
            
        }
    }
}