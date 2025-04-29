import express from "express";
import { ScrapeSend } from "./scrape.js";

const router = express.Router();

router.post("/", ScrapeSend);

export default router;
