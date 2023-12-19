import { Model, ModelObject } from 'objection';

export class RolesModel extends Model {
	id!: number;
	name!: string;

	static get tableName() {
		return 'roles';
	}
}

export type roles = ModelObject<RolesModel>;
