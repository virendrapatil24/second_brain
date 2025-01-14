import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/authentication";
import { Types } from "mongoose";
import Link from "../models/Link";
import { random } from "../utils/utils";
import Content from "../models/Content";

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

export async function shareBrainLink(req: Request, res: Response) {
    try {
        if (!req.user) {
            res.status(401).json({ message: "Access denied. User not found." });
            return;
        }
        const userId = req.user.id;
        const { share } = req.body;
        console.log("share", share)
        if (share) {
            const existingLink = await Link.findOne({ userId })
            if (existingLink) {
                res.status(201).json({ hash: existingLink.hash });
                return
            }

            const hash = random(10);
            await Link.create({
                userId,
                hash
            })
            res.status(201).json({ hash });
        } else {
            await Link.deleteOne({
                userId
            })
            res.status(201).json({ message: "link deleted successfully" });
        }


    } catch (err) {
        res.status(500).json({ message: "Error while getting brain share link", err });
    }
}

export async function getSharedBrain(req: Request, res: Response) {
    try {
        const hash = req.query.hash;

        const link = await Link.findOne({ hash })
        if (!link) {
            res.status(411).json({ message: 'no associated link found' });
            return
        };

        const user = await User.findOne({ _id: link.userId })
        if (!user) {
            res.status(411).json({ message: 'no user found for given link' });
            return
        }

        const content = await Content.find({ userId: link.userId })
        if (!content) {
            res.status(411).json({ message: 'no user content found for given link' });
            return
        }

        res.status(200).json({ username: user.username, content })
    } catch (err) {
        res.status(500).json({ message: "Error while getting shared brain from link", err });
    }
}