import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import { startBaileys } from "./services/baileys/baileysService.js";
import { awaitingReplyService } from "./services/operations/awaitingReply.js";

import * as dotenv from "dotenv";
dotenv.config();

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// var indexRouter = require("./routes/index");
// import usersRouter from "./controllers/auth/_routes.js"
import scrapeRouter from "./controllers/scraper/_routes.js";
import flowRouter from "./controllers/Flow/_routes.js";
import { aiAnalysis } from "./services/openai/openai.js";

var app = express();

// startBaileys();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.use("/scrape", scrapeRouter);
app.use("/flow", flowRouter);

app.listen(5000, () => {
  console.log(`server running on port 5000`);
});

export { app };
