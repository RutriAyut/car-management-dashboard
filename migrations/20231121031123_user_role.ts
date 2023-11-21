import { table } from "console";
import { Knex } from "knex";

const userRole = "user_role";
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(userRole, (table: Knex.TableBuilder) => {
    table.integer("user_id").primary().notNullable();
    table.integer("role_id").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(userRole);
}
