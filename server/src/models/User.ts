import mongoose, { Schema } from 'mongoose'
import { IUser, IUserExist } from './interfaces'

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, unique: true },
    firstName: { type: String },
    lastName: { type: String },
})

UserSchema.statics.findByEmailAndUsername =
    async function findByEmailAndUsername(email: string, username: string) {
        const user = this;
        const query = {
            $or: [{ email }, { username }],
        }
        const foundUser = await user
            .findOne(query)
            .collation({ locale: 'en', strength: 2 })
            .exec();

        return foundUser;
    };

export const User: IUserExist = mongoose.model<IUser, IUserExist>("User", UserSchema);