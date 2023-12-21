/* eslint-disable @typescript-eslint/no-explicit-any */
describe('GET cars',() => {
	const request = require('supertest');
	const appRoute = require('./../../../app');

	describe('Get Car whitout login', () =>{
		test('should get list of cars', async() => {
			await request(appRoute)
				.get('/cars')
				.then((res:any) => {
					expect(res.statusCode).toBe(200);
				});
		});

		test('should get detail of car', async() => {
			await request(appRoute)
				.get('/cars/details/1')
				.then((res:any) => {
					expect(res.statusCode).toBe(200);
				});
		});
	});

	describe('Get Car as super admin and admin', () =>{
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

		test('should get list of cars', async() => {
			await request(appRoute)
				.get('/cars/super')
				.set('Authorization', `Bearer ${token}`)
				.then((res:any) => {
					expect(res.statusCode).toBe(200);
				});
		});

		test('should return detail car', async () =>{
			await request(appRoute)
				.get('/cars/super/details/1')
				.set('Authorization', `Bearer ${token}`)
				.then((res:any) => {
					expect(res.statusCode).toBe(200);
				});
		});
	});
});