import { connection } from "./connection"

export const getUserById = async (id: string): Promise<any> => {
    const idResult = await connection("User")
        .where({id})

        return idResult[0];
};