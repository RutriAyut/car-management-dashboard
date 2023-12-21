/* eslint-disable @typescript-eslint/no-explicit-any */
describe('GET Users',() => {
	const request = require('supertest');
	const appRoute = require('./../../../app');

	let token = '';

	beforeAll(async () => {
		const email = 'super_admin@gmail.com';
		const password = 'superadmin';
		const response = await request(appRoute)
			.post('/user/signin')
			.set('Content-Type', 'application/json')
			.send({email, password})
			.then((res:any) => {
				return res;
			});
		token = response._body.token;
	});

	describe('Get Profile user whose login', () =>{
		test('should return Profile of user whose login right now', async () => {
			await request(appRoute)
				.get('/manage/profile')
				.set('Authorization', `Bearer ${token}`)
				.then((res:any) => {
					expect(res.statusCode).toBe(200);
				});

		});
	});

	describe('Get Users as admin and superadmin', () =>{
		test('should get list of users ', async() => {
			await request(appRoute)
				.get('/manage/super/list')
				.set('Authorization', `Bearer ${token}`)
				.then((res:any) => {
					expect(res.statusCode).toBe(200);
				});
		});

		test('should update role Member to Admin', async () => {
			await request(appRoute)
				.put('/manage/super/update/2')
				.set('Authorization', `Bearer ${token}`)
				.then((res:any) => {
					expect(res.statusCode).toBe(200);
				});
		});
	});
});