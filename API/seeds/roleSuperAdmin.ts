import { Knex } from 'knex';

const userRole = 'user_role';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex(userRole).del();

	// Inserts seed entries
	await knex(userRole).insert([{ id: 1, role_id: 1 }, { id: 2, role_id: 3 }]);
}
