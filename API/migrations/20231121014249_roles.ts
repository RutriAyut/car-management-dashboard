import { Knex } from 'knex';

const role = 'roles';
export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable(role, (table: Knex.TableBuilder) => {
		table.increments('id').primary();
		table.string('name', 20).notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable(role);
}
