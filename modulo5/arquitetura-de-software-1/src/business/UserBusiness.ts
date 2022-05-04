import UserDatabase from "../data/UserDatabase"
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { SignupDTO } from "../types/SignUpDTO";

export default class UserBusiness {
    constructor(
        private userData: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

    signup = async (newUser: SignupDTO) => {
        const {name, email, password, role} = newUser

        if (!name || !email || !password) {
            throw new Error("É preciso preencher todos os campos.")
        };

        const userExists = await this.userData.findByEmail(email)
        if(userExists) {
            throw new Error("Esse email já está cadastrado.")
        }

        const id = this.idGenerator.generateId()

        const hashPassword = await this.hashManager.createHash(password)

        const user = new User(
            id,
            name,
            email,
            hashPassword,
            role
        )

        await this.userData.insert(user);

        const token = this.authenticator.generateToken({id, role})

        return token
    }
}