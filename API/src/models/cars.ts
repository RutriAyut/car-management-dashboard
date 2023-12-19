import { Model, ModelObject } from 'objection';

export class CarModel extends Model {
	id!: number;
	manufacture!: string;
	model!: string;
	rent_per_day!: number;
	image!: string;
	type!: number;
	description!: string;
	available_at!: Date;
	available!: boolean;
	capacity!: number;
	driver!: boolean;
	transmission!: string;
	isDeleted!: boolean;

	static get tableName() {
		return 'cars';
	}
}

export type cars = ModelObject<CarModel>;
