import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
	try {
		console.log("goHome");
		res.send("Home Page!");
		// send | json | redirect | end | render
	} catch (err: any) {
		console.log("Error on Home Page:", err.message);
	}
};

restaurantController.getLogin = (req: Request, res: Response) => {
	try {
		res.send("getLogin!");
	} catch (err: any) {
		console.log("Error on Login Page:", err.message);
	}
};

restaurantController.getSignup = (req: Request, res: Response) => {
	try {
		res.send("getSignup!");
	} catch (err: any) {
		console.log("Error on Signup Page:", err.message);
	}
};

restaurantController.processLogin = (req: Request, res: Response) => {
	try {
		res.send("processLogin!");
	} catch (err: any) {
		console.log("Error on processLogin:", err.message);
	}
};

restaurantController.processSignup = async (req: Request, res: Response) => {
	try {
		console.log("processSignup!");

		const newMember: MemberInput = req.body;
		newMember.memberType = MemberType.RESTAURANT;

		const memberService = new MemberService();
		const result = await memberService.processSignup(newMember);

		res.send(result);
	} catch (err: any) {
		res.send(err);
	}
};

export default restaurantController;
