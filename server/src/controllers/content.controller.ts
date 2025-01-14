import { Request, Response } from "express";
import Content from "../models/Content";

export async function getContent(req: Request, res: Response) {
    try {
        if (!req.user) {
            res.status(401).json({ message: "Access denied. User not found." });
            return;
        }

        const userId = req.user.id;
        const content = await Content.find({ userId });
        res.status(200).json({ content })
    } catch (err) {
        res.status(500).json({ message: "error occured while getting your content", err });
    }
}


export async function createContent(req: Request, res: Response) {
    try {
        if (!req.user) {
            res.status(401).json({ message: "Access denied. User not found." });
            return;
        }
        const { link, type, title, tags } = req.body
        const userId = req.user.id;
        const newContent = new Content({
            link,
            type,
            title,
            tags,
            userId
        });

        await newContent.save();
        res.status(201).json({ message: "content created successfully", content: newContent });
    } catch (err) {
        res.status(500).json({ message: "error occured while creating your content", err });
    }

}

export async function updateContent(req: Request, res: Response) {
    try {
        if (!req.user) {
            res.status(401).json({ message: "Access denied. User not found." });
            return;
        }
        const userId = req.user.id;
        const { contentId } = req.query;
        const content = await Content.findOne({ _id: contentId, userId });
        if (!content) {
            res.status(400).json({ error: "content not found" });
            return;
        }
        const { link, type, title, tags } = req.body

        if (link) content.link = link;
        if (type) content.type = type;
        if (title) content.link = title;
        if (tags) content.link = tags;

        await content.save();
        res.status(201).json({ message: "content updated successfully", content });
    } catch (err) {
        res.status(500).json({ message: "error occured while updating your content", err });
    }
}

export async function deleteContent(req: Request, res: Response) {
    try {
        if (!req.user) {
            res.status(401).json({ message: "Access denied. User not found." });
            return;
        }
        const userId = req.user.id;
        const { contentId } = req.query;
        const content = await Content.findOne({ _id: contentId, userId });
        if (!content) {
            res.status(400).json({ error: "content not found" });
            return;
        }

        await content.deleteOne();
        res.status(200).json({ message: "content deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "error occured while deleting your content", err });
    }
}
