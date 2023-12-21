import { Request, Response } from 'express';
import UserService from '../services/userService';
import UserRoleService from '../services/userRoleService';

// get all data users
const getAll = async (req: Request, res: Response) => {
	try {
		const getUsers = await new UserService().getAll();
		return res.status(200).json({ getUsers });
	} catch (error) {
		return res.status(404).json({ massege: 'Erorr : No User was found' });
	}
};

// update from member to admin
const update = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	try {
		const updateUserRole = await new UserRoleService().updateToAdmin(id);
		if(updateUserRole){
			const getUsers = await new UserService().getById(id);
			return res.status(200).json({ getUsers });}
	} catch (err) {
		return res.status(404).json({ massage: 'Erorr : No User was found' });
	}

};

// Get User By id
const getById = async (req: Request, res: Response) => {
	const user = req.body.user;
	try {
		const getUsers = await new UserService().getById(user[0].id);
		return res.status(200).json({ getUsers });
	} catch (error) {
		return res.status(404).json('Erorr : ' + error);
	}
};

module.exports = { getAll, update, getById };
