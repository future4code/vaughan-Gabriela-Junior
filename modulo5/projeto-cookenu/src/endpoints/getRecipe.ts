import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";

export const getRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const token = req.headers.authorization

        if (!token) {
            throw new Error("É necessária autorização passada pelo headers.")
        };

        const authenticator = new Authenticator();
        const tokenData = authenticator.getTokenData(token);

        if (!tokenData) {
            throw new Error("É necessário estar logado para acessar essa funcionalidade.")
        };

        const recipeDatabase = new RecipeDatabase();
        const recipe = await recipeDatabase.getRecipeById(id);

        res.status(200).send(recipe)

    } catch (error: any) {
        switch (error.message) {
            case "É necessária autorização passada pelo headers.":
                res.status(400).send({ message: error.message })
                break
            case "É necessário estar logado para acessar essa funcionalidade.":
                res.status(400).send({ message: error.message })
                break
            default:
                res.status(400).send({ message: error.message })
                break
        }

    }
}