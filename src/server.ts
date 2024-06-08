// 2024-06-08
// 39th lesson
// Member Schema Models

// Darsimiz rejasi:
// 1) Member Service Model xaqida gaplashamiz
// 2) Mongoose documentation'ga borib unda Schema, Model va Query tushunchalarini o'rganamiz
// 3) Schema Member Model xosil qilamiz

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
