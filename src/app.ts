import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

import dotenv from "dotenv";
dotenv.config();

const MongoDBStore = ConnectMongoDB(session);

const store = new MongoDBStore({
	uri: String(process.env.MONGO_URL),
	collection: "sessions",
});

// Express Has Four Main Structures:
// 1) ENTERANCE
const app = express();

// Middleware pattern:
// console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

// 2) SESSIONS
app.use(
	session({
		secret: String(process.env.SESSION_SECRET),
		cookie: {
			maxAge: 3600 * 3600 * 6, // 6hours. Cookie will destry itself after 6 hours!
		},
		store: store,
		resave: true,
		saveUninitialized: true,
	})
);

// 3) VIEWS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 4) ROUTERS
// Biz Burak backend loyihamizni ikki maqsadda ishlatmoqdamiz:
// 1) SPA: User'lar uchun xizmat qiladigan React loyihamiz uchun REST API SERVER sifatida ishlatamiz.
// 2) Tradional Backend Development (BSSR): Backend'ni Adminka loyihamizni qurish uchun ham ishlatamiz (EJS).

// Middleware Design Pattern
// This router is for BSSR
app.use("/admin", routerAdmin); // EJS

// This router is for React project
app.use("/", router); // REACT

// Export app.ts in order to use it in another file
export default app; // module.exports = app
