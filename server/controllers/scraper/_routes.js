import express from "express";

const router = express.Router();

router.post("/", ScrapeSend);

export default router;
