import { connection } from "./connection"

export const createUser = async (id: string, email: string, password: string) => {
    await connection("User")
            .insert({
                id,
                email,
                password
            })
};