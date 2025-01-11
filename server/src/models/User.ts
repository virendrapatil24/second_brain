import moongose, { Schema } from 'mongoose'
import { IUser } from './interfaces'

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    email: { type: String, unique: true },
    firstName: { type: String },
    lastName: { type: String },
})

export default moongose.model<IUser>("User", UserSchema);