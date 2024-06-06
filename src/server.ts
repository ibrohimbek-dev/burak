// 2024-06-06
// 37th lesson
// Mongoose & Express

// Darsimiz rejasi:
// 1) MongoDB'ga mongoose orqalik ulanamiz
// 2) Loyihamizga expressni o'rnatamiz

// =================================================================

// Mongoose bu MongoDB bilan ishlash uchun hosil qilingan maxsus package hisoblanadi

// Connect MongoDB via Mongoose
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connected successfully!");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("An error occured whie connecting to MongoDB:", err.message);
  });
