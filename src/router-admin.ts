import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import uploadProductImage from "./libs/utils/uploader";
import makeUploader from "./libs/utils/uploader";

// Restaurant
// api
routerAdmin.get("/", restaurantController.getAdminHome);

routerAdmin
	.get("/signup", restaurantController.getAdminSignup)
	.post("/signup", makeUploader("members").single("memberImage"), restaurantController.adminSignup);

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
	makeUploader("products").single("productImage"),
	productController.createNewProduct
);
routerAdmin.post(
	"/product/:id",
	restaurantController.verifyAdmin,
	productController.updateChosenProduct
);

// User Members

export default routerAdmin;
