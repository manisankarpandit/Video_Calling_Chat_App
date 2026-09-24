import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = await import("mongoose");

export const connectDB = async () => {
  try {
    await mongoose.default.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error in connecting to MongoDB", error);
    process.exit(1);
  }
};