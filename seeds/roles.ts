import { Knex } from "knex";
const roles = "roles";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(roles).del();

  // Inserts seed entries
  await knex(roles).insert([
    { id: 1, name: "SUPER" },
    { id: 2, name: "ADMIN" },
    { id: 3, name: "MEMBER" },
  ]);
}
