import { express } from "express";
import { ScrapeSend } from "./flow.js";

const router = express.Router();

router.post("/", ScrapeSend);

export default router;
