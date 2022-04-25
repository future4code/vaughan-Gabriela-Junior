import { Request, Response } from "express";
import { getData } from "../data/getData";
import { getUserById } from "../data/getUserById";

export const getUserInformation = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticationData = getData(token);

        const user = await getUserById(authenticationData.id)

        res.status(200).send({
            id: user.id,
            email: user.email
        })

    } catch (error: any) {
        res.status(400).send({message: error.message})

    }
};