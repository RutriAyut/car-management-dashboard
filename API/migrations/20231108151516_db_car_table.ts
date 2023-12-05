import { Knex } from "knex";

const cars = "cars";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(cars, (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("name", 100).notNullable();
    table.integer("rent_per_day");
    table.string("image").notNullable();
    table.integer("type").notNullable();
    table.boolean("isDeleted").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(cars);
}
