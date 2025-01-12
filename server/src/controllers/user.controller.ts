import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/authentication";
import { Types } from "mongoose";

export async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const { username, password, email, firstName, lastName } = req.body;
        const usernameLowerCase = username.toLowerCase();
        const emailLowerCase = email.toLowerCase();

        const existingUser = await User.findByEmailAndUsername(
            emailLowerCase, usernameLowerCase
        )
        if (existingUser) {
            const fieldInUse =
                existingUser.username.toLowerCase() === usernameLowerCase
                    ? "username"
                    : "email";
            res.status(422).json({ message: `${fieldInUse} already exist` });
            return;
        }

        const hashedPassword: string = await bcrypt.hash(password, 10);
        const newUser = new User({
            username: usernameLowerCase,
            password: hashedPassword,
            email: emailLowerCase,
            firstName,
            lastName,
        })
        await newUser.save()

        res.status(201).json({ message: 'user signed up successfully' })
    } catch (err) {
        res.status(500).json({ message: "Error while signing up", err });
    }
}

export async function loginUser(req: Request, res: Response): Promise<void> {
    try {
        const { username, password } = req.body;

        const currentUser = await User.findOne({ username });
        if (!currentUser) {
            res.status(400).json({ message: 'user not found' });
            return
        }

        const isPasswordValid = await bcrypt.compare(password, currentUser.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'invalid password' })
            return
        }

        const { error, token } = generateToken({
            id: (currentUser._id as Types.ObjectId).toString(),
        })
        if (error) {
            res.status(400).json({ error })
            return
        }

        res.status(200).json({ message: 'user logged in successfully', authToken: token })
    } catch (err) {
        res.status(500).json({ message: "Error while logging", err });
    }
}