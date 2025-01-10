import moongose, { Schema } from 'mongoose'


const UserSchema: Schema = new Schema({
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true },
    email: { type: String, unique: true },
    firstName: { type: String },
    lastName: { type: String },
})