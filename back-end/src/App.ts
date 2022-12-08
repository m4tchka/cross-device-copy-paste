import express from "express";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";
import mongoose from "mongoose";
import snippetRouter from "./routes";
import * as dotenv from "dotenv";
dotenv.config();
declare var process: { env: { [key: string]: string } };
const port = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Cross-device-copy-paste home endpoint");
});
app.use("/snippets", snippetRouter);
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        if (process.env.NODE_ENV != "test") {
            app.listen(port, () => {
                console.log(`Listening on port ${port}`);
            });
        }
    })
    .catch((err) => console.error(err));

export default app;
