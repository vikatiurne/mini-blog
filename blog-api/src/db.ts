import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log("Connect Db successfully");
  } catch (error) {
    console.error(`Error DB connect: ${error}`);
  }
};

export default connectDb;
