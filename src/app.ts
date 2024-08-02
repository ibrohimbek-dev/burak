import cors from "cors";
import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import session from "express-session";
import cookieParser from "cookie-parser";

import { MORGAN_FORMAT } from "./libs/config";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);

const store = new MongoDBStore({
	uri: String(process.env.MONGO_URL),
	collection: "sessions",
});

// Express Has Four Main Structures:
// 1) ENTRANCE
const app = express();

// Middleware pattern:
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());
app.use(morgan(MORGAN_FORMAT));

// 2) SESSIONS
app.use(
	session({
		secret: String(process.env.SESSION_SECRET),
		cookie: {
			maxAge: 3600 * 3600 * 6, // 6hours. Cookie will destroy itself after 6 hours!
		},
		store: store,
		resave: true,
		saveUninitialized: true,
	})
);

app.use((req, res, next) => {
	const sessionInstance = req.session as T;
	res.locals.member = sessionInstance.member;
	next();
});

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
