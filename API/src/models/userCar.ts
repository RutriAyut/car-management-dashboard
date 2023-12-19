import { Model, ModelObject } from 'objection';

export class UserCarModel extends Model {
	id!: number;
	create_by?: number;
	create_at?: Date;
	update_by?: number;
	update_at?: Date;
	delete_by?: number;
	delete_at?: Date;

	static get tableName() {
		return 'user_car';
	}
}

export type userCar = ModelObject<UserCarModel>;
