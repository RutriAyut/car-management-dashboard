import { table } from "console";
import { Knex } from "knex";

const user = "users";
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(user, (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("email", 20).notNullable().unique();
    table.string("password", 250).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(user);
}
