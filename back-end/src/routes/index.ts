import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    return res.json("Get all snippets endpoint");
});
router.post("/", (req, res) => {
    return res.json("Post snippet endpoint");
});
router.get("/:id", (req, res) => {
    console.log("Specific snippet:", req.params.id);
    return res.json(`Get specific snippet endpoint, ${req.params.id}`);
});
router.delete("/:id", (req, res) => {
    return res.json(`Delete snippet endpoint, ${req.params.id}`);
});
router.put("/:id", (req, res) => {
    // console.log(
    //     "Replace specific snippet:",
    //     req.params.id,
    //     "with",
    //     req.body.snippet
    // );
    return res.json(
        `Update snippet endpoint, ${req.params.id}\nNew snippet: ${(req.body.snippet)}`
    );
});
export default router;
