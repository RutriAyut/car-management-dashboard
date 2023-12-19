import { Knex } from 'knex';

const userCar = 'user_car';
export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable(userCar, (table: Knex.TableBuilder) => {
		table.integer('id').primary().notNullable();
		table.integer('create_by');
		table.date('create_at');
		table.integer('update_by');
		table.date('update_at');
		table.integer('delete_by');
		table.date('delete_at');
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable(userCar);
}
