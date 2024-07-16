import { Request, Response } from "express";
import { T } from "../libs/types/common";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberService from "../models/Member.service";
import { MemberType } from "../libs/enums/member.enum";
import Errors from "../libs/Errors";
import AuthService from "../models/Auth.service";

// This is for React project

const memberController: T = {};
const memberService = new MemberService();
const authService = new AuthService();

memberController.userSignup = async (req: Request, res: Response) => {
	try {
		const input: MemberInput = req.body;

		const result: Member = await memberService.userSignup(input);

		// TODO: Loyihamizning mana shu qismida Token Authentication integration qilamiz:

    const token = await authService.createToken(result);
    console.log("Auth Token Sign Up =>", token);

		res.json({ member: result });
	} catch (err: any) {
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};

memberController.userLogin = async (req: Request, res: Response) => {
	try {
		const input: LoginInput = req.body;

		// TODO: Loyihamizning mana shu qismida Token Authentication integration qilamiz
		const result = await memberService.userLogin(input);
		const token = await authService.createToken(result);		
		res.json({ member: result });
	} catch (err: any) {
		console.log("Error on login", err.message);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};

export default memberController;
