import Snippet from "../models/snippets";
import express from "express";
// Get all
export const getAllSnippets = async (
    req: express.Request,
    res: express.Response
) => {
    const allSnippets = await Snippet.find({}).sort({ createdAt: -1 });
    res.status(200).json(allSnippets);
};
// Get 1
// Add 1
export const createNewSnippet = async (
    req: express.Request,
    res: express.Response
) => {
    const { title, content, files } = req.body;
    try {
        const newSnippet = await Snippet.create({ title, content, files });
        res.status(200).json(newSnippet);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
// Delete 1
// Replace 1
