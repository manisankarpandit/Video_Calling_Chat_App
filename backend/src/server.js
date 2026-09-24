import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import chatRoutes from "./routes/chat.route.js";

import { connectDB } from "./lib/db.js";

const app = express();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// ================= CORS =================

const allowedOrigins = [
  "http://localhost:5173",
  "https://video-calling-chat-app-1-fhzr.onrender.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// ================= MIDDLEWARE =================

app.use(express.json());
app.use(cookieParser());

// ================= ROUTES =================

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

// ================= FRONTEND =================

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend/dist/index.html")
    );
  });
}

// ================= START SERVER =================

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  connectDB()
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error);
    });
});