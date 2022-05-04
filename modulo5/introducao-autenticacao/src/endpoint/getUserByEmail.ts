import { connection } from "../data/connection"

export const getUserByEmail = async (email: string): Promise<any> => {
    const emailResult = await connection("User")
        .where({ email });

        return emailResult[0];
};