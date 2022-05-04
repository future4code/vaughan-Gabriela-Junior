import { USER_ROLE } from "../types/USER_ROLE";

export default class User{
    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        role: USER_ROLE
    ) {}
}