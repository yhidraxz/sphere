import * as dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected this shit");
  } catch {
    console.log("cant connecvt this shit bro");
    process.exit(1);
  }
};