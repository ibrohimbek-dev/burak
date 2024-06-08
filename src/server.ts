// 2024-06-08
// 38th lesson
// Routers & Controllers

// Darsimiz rejasi:
// 1) Router'larni o'rganamiz
// 2) MVC artichectual patterni o'rganamiz
// 3) Member controllerlarni xosil qilamiz
// 4) Restaurant controllerlarni xosil qilamiz

// =================================================================

// Mongoose bu MongoDB bilan ishlash uchun hosil qilingan maxsus package hisoblanadi

// MVC => Model View Controller
// Order of MVC
// Client => Controller => Model => Database => Model => Controller => View => Controller => Client

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
