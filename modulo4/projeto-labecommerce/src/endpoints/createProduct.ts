import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../types";

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, price, image_url } = req.body

        const newProduct: Product = {
            id: String(Date.now()),
            name,
            price,
            image_url
        }

        if (!name || !price || !image_url) {
            throw new Error("Todos os campos devem ser preenchidos.");

        } else {
            await connection("labecommerce_products")
                .insert(newProduct)

            res.status(201).send("Produto criado com sucesso!")

        };

    } catch (error: any) {
        switch (error.message) {
            case "Todos os campos devem ser preenchidos":
                res.status(400).send({message: error.message})
                break
            default:
                res.status(400).send({message: error.message})
        };
    };
};