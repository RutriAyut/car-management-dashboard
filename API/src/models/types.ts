import { Model, ModelObject } from 'objection';

export class CarTypeModel extends Model {
	id!: number;
	name!: string;

	static get tableName() {
		return 'types';
	}
}

export type types = ModelObject<CarTypeModel>;
