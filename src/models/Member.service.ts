import MemberModel from "../schema/Member.model";
import {
	LoginInput,
	Member,
	MemberInput,
	MemberUpdateInput,
} from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs";
import { shapeIntoMongooseObjectId } from "../libs/config";

class MemberService {
	private readonly memberModel;

	constructor() {
		this.memberModel = MemberModel;
	}

	// ---------------------------------------------------------------------------------------------------------------------------------------------
	// SPA uchun Member.service.ts bo'limi:

	public async userSignup(input: MemberInput): Promise<Member> {
		const salt = await bcrypt.genSalt();
		input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

		try {
			const result = await this.memberModel.create(input);
			result.memberPassword = "";
			return result.toJSON();
		} catch (err: any) {
			console.log("(Member.service.ts) error on signup:", err.message);
			throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
		}
	}

	public async userLogin(input: LoginInput): Promise<Member> {
		// TODO: consider member status laters
		const member = await this.memberModel
			.findOne(
				{
					memberNick: input.memberNick,
					// memberStatus: { $nin: [MemberStatus.DELETE, MemberStatus.BLOCK] },
					memberStatus: { $ne: MemberStatus.DELETE },
				},
				{ _id: 1, memberNick: 1, memberPassword: 1, memberStatus: 1 }
			)
			.exec();

		if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
		else if (member.memberStatus === MemberStatus.BLOCK) {
			throw new Errors(HttpCode.FORBIDDEN, Message.BLOCKED_USER);
		}

		const isMatch = await bcrypt.compare(
			input.memberPassword,
			member.memberPassword
		);

		if (!isMatch) {
			throw new Errors(HttpCode.UNAUTHORIZED, Message.INCORRECT_PASSWORD);
		}

		// return await this.memberModel.findById(member._id).exec();
		// .lean() methodi orqalik biz datebase'dan olgan ma'lumotimizni o'zgartirish imkoniga ega bo'lamiz

		return await this.memberModel.findById(member._id).lean().exec();
	}
	// TODO: Brian
	public async getMemberDetail(member: Member): Promise<Member> {
		const memberId = shapeIntoMongooseObjectId(member._id);
		const result = await this.memberModel
			.findOne({ _id: memberId, memberStatus: MemberStatus.ACTIVE })
			.exec();

		if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

		return result;
	}

	public async updateMember(
		member: Member,
		input: MemberUpdateInput
	): Promise<Member> {
		const memberId = shapeIntoMongooseObjectId(member._id);
		const result = await this.memberModel
			.findOneAndUpdate({ _id: memberId }, input, { new: true })
			.exec();

		if (!result) {
			throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
		}

		return result;
	}

	public async getTopUsers(): Promise<Member[]> {
		const result = await this.memberModel
			.find({
				memberStatus: MemberStatus.ACTIVE,
				memberPoints: { $gte: 1 },
			})
			.sort({ memberPoints: -1 })
			.limit(4)
			.exec();

    // TODO: Savol => Nega member bo'lmasa ham bo'sh array'ni qaytarmoqda?
    // Add .length
		if (!result) {
			throw new Errors(HttpCode.NOT_FOUND, Message.NO_TOP_USERS_FOUND);
		}

		return result;
	}

	// ---------------------------------------------------------------------------------------------------------------------------------------------
	// BSSR uchun Member.service.ts bo'limi:

	public async adminSignup(input: MemberInput): Promise<Member> {
		const exist = await this.memberModel
			.findOne({ memberType: MemberType.RESTAURANT })
			.exec();
		if (exist) throw new Errors(HttpCode.EXIST, Message.ADMIN_EXIST);

		const salt = await bcrypt.genSalt();
		input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

		try {
			// const tempResult = new this.memberModel(input);
			// const result = await tempResult.save();

			const result = await this.memberModel.create(input);

			result.memberPassword = "";
			return result;
			// return result as Member;
		} catch (err) {
			throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
		}
	}

	public async adminLogin(input: LoginInput): Promise<Member> {
		const member = await this.memberModel
			.findOne(
				{ memberNick: input.memberNick },
				{ _id: true, memberNick: 1, memberPassword: 1 }
			)
			.exec();

		if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

		// const isMatch = input.memberPassword === member.memberPassword;

		const isMatch = await bcrypt.compare(
			input.memberPassword,
			member.memberPassword
		);

		if (!isMatch) {
			throw new Errors(HttpCode.UNAUTHORIZED, Message.INCORRECT_PASSWORD);
		}

		return await this.memberModel.findById(member._id).exec();
	}

	public async getUsers(): Promise<Member[]> {
		const result = await this.memberModel
			.find({ memberType: MemberType.USER })
			.exec();

		console.log("(member.service.controller) getUsers:", result);
		// TODO: Shu qismida mantiqiy xatolik bor
		// if (!result?.length) {
		// 	throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
		// }

		return result;
	}

	public async updateChosenUser(input: MemberUpdateInput): Promise<Member> {
		const memberId = input._id;
		const result = await this.memberModel
			.findByIdAndUpdate({ _id: memberId }, input, { new: true })
			.exec();

		console.log("(member.service.controller) updateChosenUser:", result);
		if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

		return result;
	}
}

export default MemberService;
