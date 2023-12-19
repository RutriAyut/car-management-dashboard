import { NextFunction, Request, Response } from 'express';

const isSuper = async (req: Request, res: Response, next: NextFunction) => {
	if (req.body.user) {
		const user = req.body.user;
		if (user[0].name === 'SUPER') {
			next();
		} else {
			res.status(401).json({
				message: 'Unauthorized',
			});
		}
	}
};

export default isSuper;
