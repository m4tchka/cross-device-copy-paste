import express from "express";
import {
    getAllSnippets,
    createNewSnippet,
    getOneSnippet,
} from "../controllers/snippetController";
const router = express.Router();

router.get("/", getAllSnippets);
router.post("/", createNewSnippet);
router.get("/:id", getOneSnippet);
router.delete("/:id", (req, res) => {
    return res.json(`Delete snippet endpoint, ${req.params.id}`);
});
router.put("/:id", (req, res) => {
    return res.json(
        `Update snippet endpoint, ${req.params.id}\nNew snippet: ${req.body.snippet}`
    );
});
export default router;
