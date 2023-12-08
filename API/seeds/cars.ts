import { Knex } from "knex";
const cars = "cars";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(cars).del();

  // Inserts seed entries
  await knex(cars).insert([
    {
      id: 1,
      manufacture: "Ford",
      model: "F150",
      rent_per_day: 200000,
      image: "https://i.ibb.co/k5t0hKS/image-1.png",
      type: 1,
      description:
        "Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.",
      available_at: new Date(),
      available: true,
      capacity: 4,
      driver: true,
      transmission: "Automatic",
      isDeleted: false,
    },
  ]);
}
