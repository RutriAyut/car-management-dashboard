/* eslint-disable @typescript-eslint/no-explicit-any */
import CarRepository from '../repositories/carRepository';

export default class CarService {
	#carRepository: CarRepository;

	constructor() {
		this.#carRepository = new CarRepository();
	}

	async getAll() {
		return await this.#carRepository.getAll();
	}

	async getAllSuper() {
		return await this.#carRepository.getAllSuper();
	}

	async getById(id: number) {
		return await this.#carRepository.getById(id);
	}

	async getByIdSuper(id: number) {
		return await this.#carRepository.getByIdSuper(id);
	}

	async post(req: any, img: string) {
		return await this.#carRepository.post(req, img);
	}

	async put(
		id: number,
		manufacture: string,
		model: string,
		rent: number,
		type: number,
		img: string,
		description: string,
		availableAt: Date,
		available: boolean,
		capacity: number,
		transmission: string,
		driver: boolean
	) {
		return await this.#carRepository.put(
			id,
			manufacture,
			model,
			rent,
			type,
			img,
			description,
			availableAt,
			available,
			capacity,
			transmission,
			driver
		);
	}

	async delete(id: number) {
		return await this.#carRepository.delete(id);
	}
}
