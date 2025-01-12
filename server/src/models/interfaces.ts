import { Document, Model, Types } from "mongoose";

export interface IUser extends Document {
    username: string;
    password: string;
    email?: string;
    firstName?: string;
    lastName?: string;
}

export interface IUserExist extends Model<IUser> {
    findByEmailAndUsername(email: string, username: string): Promise<IUser | null>;
}

export interface ITag extends Document {
    title: string;
}

export interface ILink extends Document {
    hash: string;
    userId: Types.ObjectId;
}

export interface IContent extends Document {
    link: string;
    type: string;
    title: string;
    tags: Types.ObjectId[];
    userId: Types.ObjectId;
}

export interface IPayload {
    id: string
}