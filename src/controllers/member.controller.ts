import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import {
	ExtendedRequest,
	LoginInput,
	Member,
	MemberInput,
} from "../libs/types/member";
import MemberService from "../models/Member.service";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import AuthService from "../models/Auth.service";
import { AUTH_TIMER } from "../libs/config";

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

		res.cookie("accessToken", token, {
			maxAge: AUTH_TIMER * 3600 * 1000,
			httpOnly: false,
		});

		res.status(HttpCode.CREATED).json({ member: result, accessToken: token });
	} catch (err: any) {
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};

memberController.userLogin = async (req: Request, res: Response) => {
	try {
		const input: LoginInput = req.body;

		const result = await memberService.userLogin(input);
		const token = await authService.createToken(result);

		res.cookie("accessToken", token, {
			maxAge: AUTH_TIMER * 3600 * 1000,
			httpOnly: false,
		});

		res.status(HttpCode.OK).json({ member: result, accessToken: token });
	} catch (err: any) {
		console.log("Error on login", err.message);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};

memberController.userLogout = (req: ExtendedRequest, res: Response) => {
	try {
		console.log("logout");
		res.cookie("accessToken", null, { maxAge: 0, httpOnly: true });
		res.status(HttpCode.OK).json({ logout: true });
	} catch (err: any) {
		console.log("Error on user userLogout", err.message);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};

memberController.getMemberDetail = async (
	req: ExtendedRequest,
	res: Response
) => {
	try {
		console.log("getMemberDetail");
		const result = await memberService.getMemberDetail(req.member);

		res.status(HttpCode.OK).json(result);
	} catch (err: any) {
		console.log("Error on user getMemberDetail", err.message);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};

memberController.verifyAuth = async (
	req: ExtendedRequest,
	res: Response,
	next: NextFunction
) => {
	try {
		// TODO: Shu qismi mentordan so'rab olishim kerak.
		// Nega o'zgaruvchilarni type'ini berib ketmayapmiz?
		const token = req.cookies["accessToken"];
		if (token) {
			req.member = await authService.checkAuth(token);
		}

		if (!req.member) {
			throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED);
		}

		next();

		// TODO: Shu qismini mentordan so'rab olishim kerak
		// err: any yoki boshqa type
	} catch (err: any) {
		console.log("Error on verifyAuth", err.message);
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard.message);
	}
};

memberController.rerieveAuth = async (
	req: ExtendedRequest,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.cookies["accessToken"];
		if (token) {
			req.member = await authService.checkAuth(token);
		}
		next();
	} catch (err) {
		console.log("Error, rerieveAuth:", err);
		next();
	}
};

export default memberController;
