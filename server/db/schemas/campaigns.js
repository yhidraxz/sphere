import mongoose from "mongoose";

const campaignsSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    createdAt: Date,
    endedAt: Date,
    duration: String,
    status: {type: String, enum: ['running', 'completed', 'failed'], default: 'running'},
})

export default mongoose.model("campaigns", campaignsSchema);