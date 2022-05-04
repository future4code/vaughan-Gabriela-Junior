import User from "../model/User";
import { FindByEmailResponse } from "../types/findByEmailResponse";
import { BaseDatabase } from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase{
    protected TABLE_NAME = "User_Arq"

    insert = async (user: User) => {
        try {
            await this.connection(this.TABLE_NAME)
                .insert(user)

        } catch (error: any) {

        }
    }

    findByEmail = async (email: string) => {
        try {

            const response: FindByEmailResponse[] = await this.connection(this.TABLE_NAME)
                .where({email})

                return response[0]

        } catch (error: any) {

        }
    }

    findAllUsers = async () => {
        try {
            
           const response = await this.connection(this.TABLE_NAME);

           return response

        } catch (error: any) {
            
        }
    }

    deleteUser = async (id: string) => {
        try {
            
            await this.connection(this.TABLE_NAME)
                .delete()
                .where(id)

        } catch (error) {
            
        }
    }

}