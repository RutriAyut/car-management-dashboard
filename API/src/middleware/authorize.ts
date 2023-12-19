import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/userService';

const authorize = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const bearerToken = req.headers.authorization;
		const token = bearerToken?.split('Bearer ')?.[1] || '';
		const tokenPayload = jwt.verify(
			token,
			process.env.SIGNATURE_KEY || 'Rahasia'
		);

		if (typeof tokenPayload == 'object') {
			req.body.user = await new UserService().getById(tokenPayload.id);
			next();
		} else {
			res.status(401).json({
				message: 'Unauthorized',
			});
		}
	} catch (error) {
		res.status(401).json({
			message: 'Unauthorized',
		});
	}
};

export default authorize;
