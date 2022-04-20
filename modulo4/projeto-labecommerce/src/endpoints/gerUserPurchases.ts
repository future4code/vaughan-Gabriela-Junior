import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../types";

export const getUserPurchases = async (req: Request, res: Response):Promise<void> => {
    try {

        const {userId} = req.params

        const userPurchases = await connection("labecommerce_users")
                                    .select('labecommerce_purchases.user_id', 'labecommerce_users.name as username',
                                    'labecommerce_products.name as product_name',
                                    'labecommerce_purchases.product_id',
                                    'labecommerce_purchases.quantity',
                                    'labecommerce_purchases.total_price')
                                    .join('labecommerce_purchases', 'labecommerce_users.id', 'labecommerce_purchases.user_id')
                                    .where('labecommerce_users.id', userId)
                                    .join('labecommerce_products', 'labecommerce_purchases.product_id', 'labecommerce_products.id');

        res.status(200).send(userPurchases);

    } catch (error: any) {
        res.status(400).send({message: error.message})

    }
};