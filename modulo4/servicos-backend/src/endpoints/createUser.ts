import {Request, Response} from "express";
import { connection } from "../app"
import { getAddress } from "../services/getAddress";

export const createUser = async (req: Request, res: Response) =>{
    try {
        const {zipcode, number, complement} = req.body
        const address = await getAddress(zipcode)        
        if (!address) {
            throw new Error ("Não foi possível registrar o endereço.")

        } else {
            await connection("UserAddress")
            .insert({
                cep: zipcode,
                street: address.street,
                number: number,
                complement: complement,
                district: address.district,
                city: address.city,
                state: address.state
            })
        }

        console.log(address)

        res.status(200).send("Endereço cadastrado com sucesso.")


    } catch (error: any) {
        switch (error.message) {
            case "Não foi possível registrar o endereço.":
                res.status(400).send(error.message)
                break
            default:
                res.status(400).send(error.message)
        }

    }

}