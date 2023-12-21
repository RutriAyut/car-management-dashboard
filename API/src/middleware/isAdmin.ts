import { NextFunction, Request, Response } from 'express';

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
	if (req.body.user) {
		const user = req.body.user;
		if (user[0].name === 'SUPER' || user[0].name === 'ADMIN') {
			next();
		} else {
			return res.status(401).json({
				message: 'Unauthorized',
			});
		}
	}
};

export default isAdmin;
