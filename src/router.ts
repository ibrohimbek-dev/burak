import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

// This is for React project

// Member:
router.post("/login", memberController.userLogin);
router.post("/signup", memberController.userSignup);
router.post(
	"/logout",
	memberController.verifyAuth,
	memberController.userLogout
);
router.get(
	"/detail",
	memberController.verifyAuth,
	memberController.getMemberDetail
);

// Product:

// Orders:

export default router;
