import { AUTH_TIMER } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { Member } from "../libs/types/member";
import jwt from "jsonwebtoken";

class AuthService {
	private readonly secretToken;
	constructor() {
		this.secretToken = process.env.SECRET_TOKEN as string;
	}

	//
	public async createToken(payload: Member) {
		return new Promise((resolve, reject) => {
			const duration = `${AUTH_TIMER}h`;

			// TODO: Quyidagi qismni o'zgartirib ketdim:
			// process.env.SECRET_TOKEN as string;
			jwt.sign(
				payload,
				this.secretToken,
				{
					expiresIn: duration,
				},
				(err, token) => {
					if (err) {
						reject(
							new Errors(HttpCode.UNAUTHORIZED, Message.TOKEN_CREATION_FAILED)
						);
					} else {
						resolve(token as string);
					}
				}
			);
		});
	}

	public async checkAuth(token: string): Promise<Member> {
		// TODO: Savol => 'await' has no effect on the type of this expression.
		const result: Member = (await jwt.verify(
			token,
			this.secretToken
		)) as Member;

		return result;
	}
}

export default AuthService;
