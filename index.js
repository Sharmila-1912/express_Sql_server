import dotenv from "dotenv";
dotenv.config(); // MUST be first

import express from "express";
import cors from "cors";
import { connectDB } from "./Db/db.js";
import userRoute from "./Routes/userRoutes.js";
import authUserRoute from "./Routes/authUserRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// routes
app.use("/api/user", userRoute);
app.use("/api/auth", authUserRoute);

app.listen(PORT, () => {
  console.log(`your server is running in ${PORT}`);
});
