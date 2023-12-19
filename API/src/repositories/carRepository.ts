/* eslint-disable @typescript-eslint/no-explicit-any */
import { CarModel } from '../models/cars';

export default class CarRepository {
	async getAll() {
		return await CarModel.query().where('isDeleted', '=', false);
	}

	async getAllSuper() {
		return await CarModel.query();
	}

	async getById(id: number) {
		return await CarModel.query()
			.where({ id })
			.where('isDeleted', '=', false)
			.throwIfNotFound();
	}

	async getByIdSuper(id: number) {
		return await CarModel.query().where({ id }).throwIfNotFound();
	}

	async post(reqBody: any, img: string) {
		const id = reqBody.id;
		const manufacture = reqBody.manufacture;
		const model = reqBody.model;
		const rent_per_day = reqBody.rent;
		const type = reqBody.type;
		const image = img;
		const description = reqBody.description;
		const available_at = reqBody.availableAt;
		const available = reqBody.available;
		const capacity = reqBody.capacity;
		const driver = reqBody.driver;
		const transmission = reqBody.transmission;
		const isDeleted = false;

		return await CarModel.query().insert({
			id,
			manufacture,
			model,
			rent_per_day,
			image,
			type,
			description,
			available_at,
			available,
			capacity,
			driver,
			transmission,
			isDeleted,
		});
	}

	async put(
		id: number,
		manufacture: string,
		model: string,
		rent_per_day: number,
		type: number,
		image: string,
		description: string,
		available_at: Date,
		available: boolean,
		capacity: number,
		transmission: string,
		driver: boolean
	) {
		return await CarModel.query().where('id', '=', id).update({
			manufacture,
			model,
			rent_per_day,
			image,
			type,
			description,
			available_at,
			available,
			capacity,
			transmission,
			driver,
		});
	}

	async delete(id: number) {
		return await CarModel.query().where({ id }).update({
			isDeleted: true,
		});
	}
}
