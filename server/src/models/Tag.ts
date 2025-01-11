import mongoose, { Document, Schema } from "mongoose";
import { ITag } from "./interfaces";


const TagSchema: Schema = new Schema({
    title: { type: String, required: true, unique: true }
})

export default mongoose.model<ITag>('Tag', TagSchema);

