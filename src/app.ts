import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";
import morgan from "morgan"
import { MORGAN_FORMAT } from "./libs/config";

// Express Has Four Main Structures:
// 1) ENTERANCE
const app = express();

// Middleware pattern:
// console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT))

// 2) SESSIONS

// 3) VIEWS
app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 4) ROUTERS
// Biz Burak backend loyihamizni ikki maqsadda ishlatmoqdamiz:
// 1) SPA: User'lar uchun xizmat qiladigan React loyihamiz uchun REST API SERVER sifatida ishlatamiz.
// 2) Tradional Backend Development (BSSR): Backend'ni Adminka loyihamizni qurish uchun ham ishlatamiz (EJS).

// Middleware Design Pattern
// This router is for BSSR
app.use("/admin", routerAdmin);       // EJS

// This router is for React project
app.use("/", router);                 // REACT


// Export app.ts in order to use it in another file
export default app; // module.exports = app

// 40th - dars shu yerda yakunlandi
// 수고 하셨습니다!
