import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

// ===========================================================
// Restaurant & Admin
// api
routerAdmin.get("/", restaurantController.getAdminHome);

routerAdmin
	.get("/signup", restaurantController.getAdminSignup)
	.post(
		"/signup",
		makeUploader("members").single("memberImage"),
		restaurantController.adminSignup
	);

routerAdmin
	.post("/login", restaurantController.adminLogin)
	.get("/login", restaurantController.getAdminLogin);

routerAdmin.get("/check-me", restaurantController.checkAdminAuthSession);
routerAdmin.get("/logout", restaurantController.adminLogout);

// ===========================================================
// Product
routerAdmin.get(
	"/product/all",
	restaurantController.verifyAdmin,
	productController.getAllProducts
);
routerAdmin.post(
	"/product/create",
	restaurantController.verifyAdmin,
	// makeUploader("products").single("productImage"),
	makeUploader("products").array("productImages", 5),
	productController.createNewProduct
);

routerAdmin.post(
	"/product/:id",
	restaurantController.verifyAdmin,
	productController.updateChosenProduct
);

// ===========================================================
// User Members
routerAdmin.get(
	"/user/all",
	restaurantController.verifyAdmin,
	restaurantController.getUsers
);

routerAdmin.post(
	"/user/edit",
	restaurantController.verifyAdmin,
	restaurantController.updateChosenUser
);

export default routerAdmin;
