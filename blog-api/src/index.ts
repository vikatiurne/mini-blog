import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router";
import connectDB from "./db";
import logger from "./midleware/logger";
import errorHandler from "./midleware/errorHandler";

dotenv.config();

const PORT = process.env.PORT ?? 5001;

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Autorization"],
    credentials: true,
  })
);

app.use(express.json());
connectDB();

app.use(logger);
app.use("/api", router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server start on PORT: ${PORT}`));
