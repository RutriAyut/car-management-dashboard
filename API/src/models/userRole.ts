import { Model, ModelObject } from 'objection';

export class UserRoleModel extends Model {
	id!: number;
	role_id!: number;

	static get tableName() {
		return 'user_role';
	}
}

export type userRole = ModelObject<UserRoleModel>;
