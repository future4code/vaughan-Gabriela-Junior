import { Recipe } from "../entities/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
    async createRecipe(recipe: Recipe) {
        try {
            await BaseDatabase.connection("cookenu_recipes")
                .insert({
                    id: recipe.getId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    date: recipe.getDate()
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)

        };
    };

    public async findRecipeByTitle(title: string): Promise<Recipe> {
        try {
            const recipe = await BaseDatabase.connection('cookenu_recipes')
                .where({ title });

                return recipe[0] && Recipe.toRecipeModel(recipe[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };


    public async getRecipeById(id: string): Promise<Recipe[]>{
        try {
            const recipes = await BaseDatabase.connection("cookenu_recipes")
                .where({id});
    
            return recipes.map((recipe => Recipe.toRecipeModel(recipe)))

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}