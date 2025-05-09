import express from 'express'
import { login } from './authController'

const router = express.Router();

router.get("/", login);

export default router