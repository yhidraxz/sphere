import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connectDb = async (mongoUrl) => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("database connected succesfully");
  } catch {
    console.log("failed to connect database");
    process.exit(1);
  }
};