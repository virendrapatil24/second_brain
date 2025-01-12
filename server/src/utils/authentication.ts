import jwt from "jsonwebtoken"
import { IPayload } from "../models/interfaces";

export function generateToken(payload: IPayload) {
    try {
        if (!process.env.SECRET_KEY) {
            throw new Error('SECRET_KEY is not defined');
        }
        const token = jwt.sign(payload, process.env.SECRET_KEY);
        return { token }
    } catch (err) {
        return { error: 'token generation failed' }
    }
}

export function validateToken(token: string) {
    try {
        if (!process.env.SECRET_KEY) {
            throw new Error('SECRET_KEY is not defined');
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        return { decoded }
    } catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
            return { error: "token expired" };
        } else if (err instanceof jwt.JsonWebTokenError) {
            return { error: "invalid token" };
        } else {
            return { error: "token verification failed" };
        }
    }
}
