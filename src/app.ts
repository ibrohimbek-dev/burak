import express from "express";
import path from "path";

// Express Has Four Main Structures:

// 1) ENTERANCE
const app = express();

// Middleware pattern:
// console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 2) SESSIONS

// 3) VIEWS
app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 4) ROUTERS

// Export app.ts in order to use it in another file
export default app; // module.exports = app


// 37th - dars shu yerda yakunlandi
// 수고 하셨습니다!
