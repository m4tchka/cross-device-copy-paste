import express from "express";
import {
    getAllSnippets,
    createNewSnippet,
    getOneSnippet,
    deleteOneSnippet,
    updateOneSnippet,
} from "../controllers/snippetController";
const router = express.Router();

router.get("/", getAllSnippets);
router.post("/", createNewSnippet);
router.get("/:id", getOneSnippet);
router.delete("/:id", deleteOneSnippet);
router.patch("/:id", updateOneSnippet);
export default router;
