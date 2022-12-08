import express from "express";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";
import * as dotenv from "dotenv";
dotenv.config();
declare var process: { env: { [key: string]: string } };
const port = process.env.PORT; /* || 3001 */
const app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Cross-device-copy-paste default endpoint");
});

if (process.env.NODE_ENV != "test") {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}

export default app;