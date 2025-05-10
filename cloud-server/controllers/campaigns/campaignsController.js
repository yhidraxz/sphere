import Campaign from "../../db/schemas/Campaign.js"
import mongoose from 'mongoose'

export const createCampaign = async (req, res) => {
    console.log('im on shit')
    const {userId, startedAt, endedAt, duration, status} = req.body

    const newCampaign = await Campaign.create({
        userId:  new mongoose.Types.ObjectId(userId),
        startedAt,
        endedAt,
        duration,
        status: status || 'completed'
    })
    console.log('im here')
     res.status(201).json({ success: true, campaignId: newCampaign._id });
}