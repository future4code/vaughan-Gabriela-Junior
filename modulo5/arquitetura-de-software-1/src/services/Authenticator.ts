import { AuthenticationData } from "../types/AuthenticationData";
import * as jwt from "jsonwebtoken"

export class Authenticator {
    generateToken = (payload: AuthenticationData): string => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.ACCESS_EXPIRES_IN
            }
        )

        return token
    }

    getTokenData = (token: string): AuthenticationData => {
        const tokenData = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as AuthenticationData

        return tokenData
    }
}