import jwt from "jsonwebtoken"
import { IPayload } from "../models/interfaces";
import { NextFunction, Request, Response } from "express";

declare global {
    namespace Express {
        interface Request {
            user?: { id: string }; // Adjust this type to match your payload structure
        }
    }
}

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

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    try {
        console.log("headers", req.headers)
        const { token } = req.headers;

        if (!token) {
            res.status(401).json({ error: "Access denied, no token provided" });
            return;
        }

        const { error, decoded } = validateToken(token as string);
        if (error || !decoded) {
            res.status(400).json({ error });
            return;
        }

        req.user = decoded as IPayload;
        next();
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
        return
    }
}