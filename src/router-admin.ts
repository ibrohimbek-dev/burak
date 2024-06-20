import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

// Restaurant
// api
routerAdmin.get("/", restaurantController.getAdminHome);

routerAdmin
	.get("/signup", restaurantController.getAdminSignup)
	.post("/signup", restaurantController.adminSignup);

routerAdmin
	.get("/login", restaurantController.getAdminLogin)
	.post("/login", restaurantController.adminLogin);

routerAdmin.get("/check-me", restaurantController.checkAdminAuthSession);
routerAdmin.get("/logout", restaurantController.adminLogout);

// Product

// User Members

export default routerAdmin;
