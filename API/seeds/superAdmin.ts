import { Knex } from 'knex';
const users = 'users';
export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex(users).del();

	// Inserts seed entries
	await knex(users).insert([
		{
			id: 1,
			email: 'super_admin@gmail.com',
			password: '$2a$12$6Dyt00l.nPbv1cy09YhvoezbCriIrFzsgSvfmkkW6YXWmay9eX0oG',
		},
		{
			id: 2,
			email: 'user@mail.com',
			password: '$2a$12$c0oh78VffFfv8pjYf7g07OLKAvs2zpSuqTh47u5nVQ4bVnnLE8IS',
		},
	]);
}
