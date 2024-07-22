import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
import makeUploader from "./libs/utils/uploader";
import productController from "./controllers/product.controller";

// This is for React project

// Member:

router.get("/member/restaurant", memberController.getRestaurant);
router.post("/member/login", memberController.userLogin);
router.post("/member/signup", memberController.userSignup);

router.post(
	"/member/logout",
	memberController.verifyAuth,
	memberController.userLogout
);

router.get(
	"/member/detail",
	memberController.verifyAuth,
	memberController.getMemberDetail
);

router.post(
	"/member/update",
	memberController.verifyAuth,
	makeUploader("members").single("memberImage"),
	memberController.updateMember
);

router.get("/member/top-users", memberController.getTopUsers);

// Product:
router.get("/products/all", productController.getProducts);

router.get(
	"/product/:id",
	memberController.retrieveAuth,
	productController.getProduct
);
// Orders:

export default router;
