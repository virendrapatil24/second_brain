import { Document, Types } from "mongoose";

export interface IUser extends Document {
    username: String;
    password: String;
    email: String;
    firstName: String;
    lastName: String;
}

export interface ITag extends Document {
    title: String;
}

export interface ILink extends Document {
    hash: String;
    userId: Types.ObjectId
}

export interface IContent extends Document {
    link: String;
    type: String;
    title: String;
    tags: Types.ObjectId[];
    userId: Types.ObjectId
}