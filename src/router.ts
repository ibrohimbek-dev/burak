import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

// This is for React project

router.post("/login", memberController.userLogin);
router.post("/signup", memberController.userSignup);

export default router;
