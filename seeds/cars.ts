import { Knex } from "knex";
const cars = "cars";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(cars).del();

  // Inserts seed entries
  await knex(cars).insert([
    {
      id: 1,
      name: "Ford",
      rent_per_day: 200000,
      image: "kosong",
      type: 1,
    },
    {
      id: 2,
      name: "BMW",
      rent_per_day: 800000,
      image: "kosong",
      type: 1,
    },
  ]);
}
