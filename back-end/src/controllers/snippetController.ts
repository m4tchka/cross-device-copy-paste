import Snippet from "../models/snippets";
import express from "express";
import mongoose from "mongoose";

/* interface Snippet {
    Title: number;
    Content: string;
    Files: string[];
} */
export const getAllSnippets = async (
    req: express.Request,
    res: express.Response
) => {
    const allSnippets = await Snippet.find({}).sort({ createdAt: -1 });
    res.status(200).json(allSnippets);
};
export const getOneSnippet = async (
    req: express.Request,
    res: express.Response
) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res
            .status(404)
            .json({ error: "No snippet found ... Invalid id" });
    }
    const specificSnippet = await Snippet.findById(req.params.id);
    if (!specificSnippet) {
        return res.status(404).json({ error: "No snippet found ... Incorrect id" });
    }
    res.status(200).json(specificSnippet);
};
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
export const deleteOneSnippet = async (
    req: express.Request,
    res: express.Response
) => {};
