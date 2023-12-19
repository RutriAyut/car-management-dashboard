/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
const encryptPassword = require('./../utilities/encryptPassword');
const checkPassword = require('./../utilities/checkPassword');
const roleId = require('./../middleware/getRole');

import UserService from './../services/userService';
import UserRoleService from '../services/userRoleService';
import RoleService from '../services/roleService';

interface UserPayload {
  id?: number;
  email: string;
  password?: string;
  role?: string;
}

const createToken = (payload: UserPayload) => {
	return jwt.sign(payload, process.env.SIGNATURE_KEY || 'Rahasia');
};

const signin = async (req: Request, res: Response) => {
	const email = req.body.email.toLowerCase().trim();
	const password = req.body.password || '';

	// cek email ada apa ga
	const user = await new UserService().getByEmail({ email });
	if (!user) {
		return res.status(404).json({
			message: 'Email is not exist, Register first!',
		});
	}

	// baru cek password
	const isPasswordCorrect = await checkPassword(password, user.password);
	if (!isPasswordCorrect) {
		return res.status(401).json({
			message: 'Password is wrong, try again!',
		});
	}

	const role = await roleId(user.id);
	//create token
	const token = createToken({
		id: user.id,
		email: user.email,
		role: role.role_id,
	});
	const roleObj = await new RoleService().getById(role.role_id);
	if (roleObj) {
		const roleName = roleObj.name;
		return res.status(200).json({
			message: `Successfully Logged In ${roleName}`,
			roleName,
			token,
		});
	}
	return res.status(200).json({
		message: 'Successfully Logged In member',
		token,
	});
};

const signup = async (req: Request, res: Response) => {
	console.log('heyo');
	const email = req.body.email;
	const password = req.body.password || '';
	const encryptedPassword = await encryptPassword(password);

	// cek email dulu
	const isEmail = await new UserService().getByEmail({ email });
	if (isEmail) {
		return res.status(409).json({
			message: 'Email is alredy registered',
		});
	}

	// simpan data user ke tabel users
	try {
		const userSignup = await new UserService().post({
			email,
			password: encryptedPassword,
		});
		const userId = Number(userSignup.id);
		// simpan data user ke user_role
		try {
			const userRoleSignup = await new UserRoleService().post(userId);
			if(userRoleSignup){
				res.status(201).json({
					message: `User ${email} is sucessfully register`,
					data: userSignup,
				});}
		} catch (err) {
			res.status(400).send({ err });
		}
	} catch (err) {
		res.status(400).send({ err });
	}
};

module.exports = { signup, signin };
