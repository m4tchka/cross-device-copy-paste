import express from "express";
import Snippet from "../models/snippets";
const router = express.Router();

router.get("/", (req, res) => {
    return res.json("Get all snippets endpoint");
});
router.post("/", async (req, res) => {
    const { title, content, files } = req.body;
    try {
        const newSnippet = await Snippet.create({ title, content, files });
        res.status(200).json(newSnippet);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get("/:id", (req, res) => {
    console.log("Specific snippet:", req.params.id);
    return res.json(`Get specific snippet endpoint, ${req.params.id}`);
});
router.delete("/:id", (req, res) => {
    return res.json(`Delete snippet endpoint, ${req.params.id}`);
});
router.put("/:id", (req, res) => {
    return res.json(
        `Update snippet endpoint, ${req.params.id}\nNew snippet: ${req.body.snippet}`
    );
});
export default router;
