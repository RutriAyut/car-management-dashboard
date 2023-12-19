import { RolesModel } from '../models/roles';

export default class RoleRepository {
	async getById(id: number) {
		return await RolesModel.query().findById(id);
	}
}
