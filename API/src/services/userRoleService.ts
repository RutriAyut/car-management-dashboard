import UserRoleRepository from '../repositories/userRoleRepository';

export default class UserRoleService {
	#userRoleRepository: UserRoleRepository;

	constructor() {
		this.#userRoleRepository = new UserRoleRepository();
	}

	// save user id and role
	async post(userId: number) {
		return await this.#userRoleRepository.post(userId);
	}

	//update member to admin by super admin
	async updateToAdmin(userId: number) {
		return await this.#userRoleRepository.updateToAdmin(userId);
	}

	//get roleid by userid
	async getRole(userId: number) {
		return await this.#userRoleRepository.getRoleId(userId);
	}
}
