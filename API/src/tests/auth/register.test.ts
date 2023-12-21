/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

describe('POST user/signup', () =>{
	const request = require('supertest');
	const appRoute = require('./../../../app');

	test('succesfully create user with status 201', async () =>{
		const email = 'user@gmail.com';
		const password = '123';

		await request(appRoute)
			.post('/user/signup')
			.set('Content-Type', 'application/json')
			.send({email, password})
			.then((res:any) => {
				expect(res.statusCode).toBe(201);
			});
	});

	test('sould get massage Email is alredy registered with status 409', async () =>{
		const email = 'super_admin@gmail.com';
		const password = '123';

		await request(appRoute)
			.post('/user/signup')
			.set('Content-Type', 'application/json')
			.send({email, password})
			.then((res:any) => {
				expect(res.statusCode).toBe(409);
			});
	});
});