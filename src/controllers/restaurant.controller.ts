import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { Message } from "../libs/Errors";

const restaurantController: T = {};

const memberService = new MemberService();

restaurantController.getHome = (req: Request, res: Response) => {
	try {
		console.log("getHome");
		res.render("home");
		// send | json | redirect | end | render
	} catch (err: any) {
		console.log("Error on Home Page:", err.message);
	}
};

restaurantController.getSignup = (req: Request, res: Response) => {
	try {
		res.render("signup");
	} catch (err: any) {
		console.log("Error on Signup Page:", err.message);
	}
};

restaurantController.getLogin = (req: Request, res: Response) => {
	try {
		res.render("login");
	} catch (err: any) {
		console.log("Error on Login Page:", err.message);
	}
};

restaurantController.adminSignup = async (req: AdminRequest, res: Response) => {
	try {
		console.log("adminSignup!");

		const newMember: MemberInput = req.body;
		newMember.memberType = MemberType.RESTAURANT;

		const result = await memberService.adminSignup(newMember);

		// TODO: Loyihamizning mana shu qismida Session Authentication integration qilamiz

		req.session.member = result;
		req.session.save(() => {
			res.send(result);
		});
	} catch (err: any) {
		res.send(err);
	}
};

restaurantController.adminLogin = async (req: AdminRequest, res: Response) => {
	try {
		console.log("req.body: ", req.body);
		const input: LoginInput = req.body;

		console.log("input:", input);

		const result = await memberService.adminLogin(input);

		// TODO: Loyihamizning mana shu qismida Session Authentication integration qilamiz

		req.session.member = result;
		req.session.save(() => {
			res.send(result);
		});
	} catch (err: any) {
		console.log("Error on processLogin:", err.message);
		res.send(err);
	}
};

restaurantController.checkAuth = async (req: AdminRequest, res: Response) => {
	try {
		console.log("checkAuthSession");

		if (req.session?.member) {
			res.send(`HI, ${req.session.member.memberNick}`);
		} else {
			// res.send(`<script> alert('${Message.NOT_AUTHENTICATED}') </script>`);
			res.send(`<script>alert(${Message.NOT_AUTHENTICATED})</script>`);
		}
	} catch (err: any) {
		console.log("Error on processLogin:", err.message);
		res.send(err);
	}
};

export default restaurantController;
