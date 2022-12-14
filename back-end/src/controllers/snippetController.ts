import Snippet from "../models/snippets";
import express from "express";
import mongoose from "mongoose";

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
        return res
            .status(404)
            .json({ error: "No snippet found ... Incorrect id" });
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
        console.log("ERROR: ", err);
        res.status(400).json({ error: err.message });
    }
};
export const deleteOneSnippet = async (
    req: express.Request,
    res: express.Response
) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res
            .status(404)
            .json({ error: "No snippet found ... Invalid id" });
    }
    const deletedSnippet = await Snippet.findOneAndDelete({
        _id: req.params.id,
    });
    if (!deletedSnippet) {
        return res
            .status(404)
            .json({ error: "No snippet found ... Incorrect id" });
    }
    res.status(400).json(deletedSnippet);
};
export const updateOneSnippet = async (
    req: express.Request,
    res: express.Response
) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res
            .status(404)
            .json({ error: "No snippet found ... Invalid id" });
    }
    const updatedSnippet = await Snippet.findOneAndUpdate(
        {
            _id: req.params.id,
        },
        { ...req.body }
    );
    if (!updatedSnippet) {
        return res
            .status(404)
            .json({ error: "No snippet found ... Incorrect id" });
    }
    return res.status(200).json(updatedSnippet);
};  
