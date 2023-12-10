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
    {
      id: 2,
      manufacture: "BMW",
      model: "X5",
      rent_per_day: 800000,
      image: "https://i.ibb.co/k5t0hKS/image-1.png",
      type: 2,
      description:
        "Rear passenger map pockets. Electrochromic rearview mirror. Dual chrome exhaust tips. Locking glove box.",
      available_at: new Date(),
      available: true,
      capacity: 6,
      driver: true,
      transmission: "Automatic",
      isDeleted: false,
    },
    {
      id: 3,
      manufacture: "Lincoln",
      model: "MKZ",
      rent_per_day: 900000,
      image: "https://i.ibb.co/k5t0hKS/image-1.png",
      type: 1,
      description:
        "Driver & front passenger map pockets. Direct-type tire pressure monitor system. Cargo area lamp. Glove box lamp.",
      available_at: new Date(),
      available: true,
      capacity: 6,
      driver: false,
      transmission: "Automanual",
      isDeleted: false,
    },
    {
      id: 4,
      manufacture: "BMW",
      model: "M5",
      rent_per_day: 900000,
      image: "https://i.ibb.co/k5t0hKS/image-1.png",
      type: 3,
      description: '6.1L SRT V8 "Hemi" engine.',
      available_at: "2024-01-01T02:49:05.563Z",
      available: true,
      capacity: 6,
      driver: true,
      transmission: "Manual",
      isDeleted: false,
    },
    {
      id: 5,
      manufacture: "Lincoln",
      model: "Navigator",
      rent_per_day: 200000,
      image: "https://i.ibb.co/k5t0hKS/image-1.png",
      type: 4,
      description:
        "Body color sill extension. Torsion beam rear suspension w/stabilizer bar. Front & rear passenger folding assist grips.",
      available_at: "2024-01-01T02:49:05.563Z",
      available: true,
      capacity: 2,
      driver: false,
      transmission: "Automatic",
      isDeleted: false,
    },
  ]);
}
