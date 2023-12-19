import { Knex } from 'knex';

const cars = 'cars';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable(cars, (table: Knex.TableBuilder) => {
		table.increments('id').primary();
		table.string('manufacture', 100).notNullable();
		table.string('model', 100).notNullable();
		table.integer('rent_per_day').notNullable();
		table.string('image').notNullable();
		table.integer('type').notNullable();
		table.string('description', 255).notNullable();
		table.datetime('available_at').notNullable();
		table.boolean('available').notNullable();
		table.integer('capacity').notNullable();
		table.boolean('driver').notNullable();
		table.string('transmission', 30).notNullable();
		table.boolean('isDeleted').notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable(cars);
}
