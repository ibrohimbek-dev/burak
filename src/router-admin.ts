import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

// Restaurant
// api
routerAdmin.get("/", restaurantController.getHome);


routerAdmin
	.get("/signup", restaurantController.getSignup)
	.post("/signup", restaurantController.adminSignup);

routerAdmin
	.get("/login", restaurantController.getLogin)
	.post("/login", restaurantController.adminLogin);


// Product

// User Members

export default routerAdmin;
