import mongoose, { Schema } from "mongoose";
import { IContent } from "./interfaces";

const contentType = ['image', 'video', 'article', 'audio', 'other', 'youtube', 'twitter'];

const ContentSchema: Schema = new Schema({
    link: { type: String },
    type: { type: String, enum: contentType, required: true },
    title: { type: String, required: true },
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
})

export default mongoose.model<IContent>('Content', ContentSchema)