import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";

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
routerAdmin.get(
	"/product/all",
	restaurantController.verifyAdmin,
	productController.getAllProducts
);
routerAdmin.post(
	"/product/create",
	restaurantController.verifyAdmin,
	productController.createNewProduct
);
routerAdmin.post(
	"/product/:id",
	restaurantController.verifyAdmin,
	productController.updateChosenProduct
);

// User Members

export default routerAdmin;
