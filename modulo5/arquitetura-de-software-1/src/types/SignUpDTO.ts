import { USER_ROLE } from "./USER_ROLE"

export type SignupDTO = {
    name: string
    email: string
    password: string
    role: USER_ROLE
}