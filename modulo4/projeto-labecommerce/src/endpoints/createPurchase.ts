import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../types";

export const createPurchase = async (req: Request, res: Response): Promise<any> => {
    try {
        const { user_id, product_id, quantity } = req.body
        const products = await connection("labecommerce_products")
            .where('id', product_id)

        const newPurchase = {
            id: String(Date.now()),
            user_id,
            product_id,
            quantity,
            total_price: (products[0].price * quantity)
        }

        if (!user_id || !product_id || !quantity) {
            throw new Error("Todos os campos devem ser preenchidos")
        } else {
            await connection("labecommerce_purchases")
                .insert(newPurchase)
            res.status(200).send("Compra feita com sucesso.")
        };

    } catch (error: any) {
        switch (error.message) {
            case "Todos os campos devem ser preenchidos":
                res.status(400).send({ message: error.message })
                break
            default:
                res.status(400).send({ message: error.message })
                break
        }

    }
};