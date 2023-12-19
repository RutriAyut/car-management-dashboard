import { UserRoleModel } from '../models/userRole';

export default class UserRoleRepository {
	// save data user with role member
	async post(userId: number) {
		const roleId = 3;

		return await UserRoleModel.query().insert({
			id: userId,
			role_id: roleId,
		});
	}

	// change member to admin by superadmin
	async updateToAdmin(idUser: number) {
		return await UserRoleModel.query()
			.where('id', '=', idUser)
			.update({ role_id: 2 });
	}

	// get role id by user id
	async getRoleId(id: number) {
		return await UserRoleModel.query().findOne({ id }).returning('*');
	}
}
