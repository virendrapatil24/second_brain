import mongoose, { Schema } from "mongoose";
import { ILink } from "./interfaces";

const LinkSchema: Schema = new Schema({
    hash: { type: String, required: true },
    userId: {
        type: mongoose.Types.ObjectId, ref: 'User', unique: true, required: true
    }
})

export default mongoose.model<ILink>('Link', LinkSchema);