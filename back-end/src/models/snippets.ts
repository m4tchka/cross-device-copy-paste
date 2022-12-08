import mongoose from "mongoose";

const Schema = mongoose.Schema;
const snippetSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        files: {
            type: [String],
            required: false,
        },
    },
    { timestamps: true }
);
export default mongoose.model("Snippet", snippetSchema);
