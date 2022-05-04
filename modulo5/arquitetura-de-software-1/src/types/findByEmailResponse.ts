import { USER_ROLE } from "./USER_ROLE"

export type FindByEmailResponse = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLE
}