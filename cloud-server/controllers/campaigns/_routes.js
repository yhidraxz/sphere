import express from 'express'
import { createCampaign } from './campaignsController.js'

const router = express.Router()

router.post("/", createCampaign)

export default router 