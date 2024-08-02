import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";

const restaurantController: T = {};

const memberService = new MemberService();

restaurantController.getAdminHome = (req: Request, res: Response) => {
	try {
		res.render("home");
		// send | json | redirect | end | render
	} catch (err: any) {
		res.redirect("/admin");
	}
};

restaurantController.getAdminSignup = (req: Request, res: Response) => {
	try {
		res.render("signup");
	} catch (err: any) {
		res.redirect("/admin");
	}
};

restaurantController.getAdminLogin = (req: Request, res: Response) => {
	try {
		res.render("login");
	} catch (err: any) {
		res.redirect("/admin");
	}
};

restaurantController.adminSignup = async (req: AdminRequest, res: Response) => {
	try {
		const file = req.file;

		if (!file)
			throw new Errors(HttpCode.BAD_REQUEST, Message.FAILED_UPLOADING_IMAGE);

		const newMember: MemberInput = req.body;

		newMember.memberImage = file?.path.replace(/\\/g, "/");
		newMember.memberType = MemberType.RESTAURANT;

		const result = await memberService.adminSignup(newMember);


		req.session.member = result;
		req.session.save(() => {
			// res.send(result);
			res.redirect("/admin/product/all");
		});
	} catch (err: any) {
		const message =
			err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
		res.send(
			`<script>alert('${message}'); window.location.replace("/admin/signup")</script>`
		);
	}
};

restaurantController.adminLogin = async (req: AdminRequest, res: Response) => {
	try {
		const input: LoginInput = req.body;
		const result = await memberService.adminLogin(input);

		req.session.member = result;
		req.session.save(() => {
			// res.send(result);
			res.redirect("/admin/product/all");
		});
	} catch (err: any) {
		const message =
			err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;

		res.send(
			`<script>alert('${message}'); window.location.replace("/admin/login")</script>`
		);
	}
};

restaurantController.adminLogout = async (req: AdminRequest, res: Response) => {
	try {
		req.session.destroy(() => {
			res.redirect("/admin");
			// res.send("cookie session is destroyed successfuly!")
		});
	} catch (err: any) {
		res.redirect("/admin");
	}
};

restaurantController.checkAdminAuthSession = async (
	req: AdminRequest,
	res: Response
) => {
	try {

		if (req.session?.member) {
			// res.send(`HI, ${req.session.member.memberNick}`);
			res.send(`<script>alert('${req.session.member.memberNick}')</script>`);
		} else {
			// res.send(Message.NOT_AUTHENTICATED);
			res.send(`<script>alert('${Message.NOT_AUTHENTICATED}')</script>`);
		}
	} catch (err: any) {
		res.send(err);
	}
};

// =================================================================
// verification restaurant controller method:
restaurantController.verifyAdmin = (
	req: AdminRequest,
	res: Response,
	next: NextFunction
) => {
	if (req.session?.member?.memberType === MemberType.RESTAURANT) {
		req.member = req.session.member;
		next();
	} else {
		const message = Message.NOT_AUTHENTICATED;
		res.send(
			`<script>alert('${message}'); window.location.replace('/admin/login')</script>`
		);
	}
};

// ========================================
// Working on users
restaurantController.getUsers = async (req: Request, res: Response) => {
	try {
		const result = await memberService.getUsers();
		res.render("users", { usersData: result });
	} catch (err: any) {
		res.redirect("/admin/login");
	}
};

restaurantController.updateChosenUser = async (req: Request, res: Response) => {
	try {
		const result = await memberService.updateChosenUser(req.body);

		res.status(HttpCode.OK).json({ userData: result });
	} catch (err: any) {

		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard);
	}
};

export default restaurantController;
