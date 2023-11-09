import { table } from "console";
import { Knex } from "knex";

const types = "types";
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(types, (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("name", 100).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(types);
}
