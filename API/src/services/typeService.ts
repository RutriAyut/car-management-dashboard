import TypeRepository from '../repositories/typeRepository';

export default class TypeService {
	#typeRepository: TypeRepository;

	constructor() {
		this.#typeRepository = new TypeRepository();
	}

	async getAll() {
		return await this.#typeRepository.getAll();
	}

	async getById(id: number) {
		return await this.#typeRepository.getById(id);
	}
}
