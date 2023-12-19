import { Knex } from 'knex';
const types = 'types';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex(types).del();

	// Inserts seed entries
	await knex(types).insert([
		{ id: 1, name: 'Sedan' },
		{ id: 2, name: 'Convertible' },
		{ id: 3, name: 'Hatchback' },
		{ id: 4, name: 'Minivan' },
		{ id: 5, name: 'Regular Cab Pickup' },
		{ id: 6, name: 'Extended Cab Pickup' },
		{ id: 7, name: 'Coupe' },
		{ id: 8, name: 'Passenger Van' },
		{ id: 9, name: 'SUV' },
	]);
}
