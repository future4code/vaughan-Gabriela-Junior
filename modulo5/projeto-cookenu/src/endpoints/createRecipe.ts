import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../entities/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const createRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description } = req.body
        const token = req.headers.authorization

        if (!token) {
            throw new Error("É necessária autorização passada pelo headers.")
        };

        const authenticator = new Authenticator();
        const tokenData = authenticator.getTokenData(token);

        if (!tokenData) {
            throw new Error("É necessário estar logado para acessar essa funcionalidade.")
        };

        if (!title || !description) {
            throw new Error("É necessário preencher todos os campos.")
        };

        const recipeDatabase = new RecipeDatabase();
        const recipe = await recipeDatabase.findRecipeByTitle(title);

        if (recipe) {
            throw new Error("Já existe uma receita com esse título.")
        }

        const idGenerator = new IdGenerator();
        const id: string = idGenerator.generateId();

        const newDate = new Date().toISOString().split("T")[0]

        console.log(newDate)


        const newRecipe = new Recipe(
            id,
            title,
            description,
            newDate
        );

        await recipeDatabase.createRecipe(newRecipe);

        res.status(200).send("teste")


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