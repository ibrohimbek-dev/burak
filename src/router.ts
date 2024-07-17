import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

// This is for React project

// Member:
router.post("/member/login", memberController.userLogin);
router.post("/member/signup", memberController.userSignup);
router.post(
	"/member/logout",
	memberController.verifyAuth,
	memberController.userLogout
);
router.get("/member/detail", memberController.verifyAuth);

// Product:

// Orders:

export default router;
