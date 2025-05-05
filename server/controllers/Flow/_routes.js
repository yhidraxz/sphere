import express from "express";
import { InitiateFlow } from "./flow.js";

const router = express.Router();

router.post("/", InitiateFlow);

export default router;
