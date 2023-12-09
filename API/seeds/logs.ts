import { Knex } from "knex";
const userCar = "user_car";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(userCar).del();

  // Inserts seed entries
  await knex(userCar).insert([{ id: 1, create_by: 1, create_at: new Date() }]);
}
