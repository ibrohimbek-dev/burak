import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
import makeUploader from "./libs/utils/uploader";

// This is for React project

// Member:

// TODO: Brian
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

router.post(
	"/update",
	memberController.verifyAuth,
	makeUploader("members").single("memberImage"),
	memberController.updateMember
);

// Product:

// Orders:

export default router;
