import RoleRepository from './../repositories/roleRepository';
export default class RoleService {
	#roleRepository: RoleRepository;

	constructor() {
		this.#roleRepository = new RoleRepository();
	}

	async getById(id: number) {
		return await this.#roleRepository.getById(id);
	}
}
