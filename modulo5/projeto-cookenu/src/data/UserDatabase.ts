import { User, USER_ROLES } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public async createUser(user: User) {
        try {
            await BaseDatabase.connection("cookenu_users")
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                    role: user.getRole()
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection('cookenu_users')
                .where({ email })

            return user[0] && User.toUserModel(user[0]);

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public async getUserById(id: string): Promise<User[]>{
        try {
            const users = await BaseDatabase.connection("cookenu_users")
                .select("id", "name", "email", "role")
                .where({id});
    
            return users.map((user => User.toUserModel(user)))

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

};