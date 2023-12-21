/* eslint-disable @typescript-eslint/no-explicit-any */
describe('POST user/signin', () =>{
	const request = require('supertest');
	const appRoute = require('./../../../app');

	test('should get bearer for login with status 200',async () =>{
		const email = 'super_admin@gmail.com';
		const password = 'superadmin';

		await request(appRoute)
			.post('/user/signin')
			.set('Content-Type', 'application/json')
			.send({email, password})
			.then((res:any) => {
				expect(res.statusCode).toBe(200);
			});
	});

	test('should get error with status 401 when password incorect', () =>{
		const email = 'super_admin@gmail.com';
		const password = 'adminsuper';

		return request(appRoute)
			.post('/user/signin')
			.set('Content-Type', 'application/json')
			.send({email, password})
			.then((res:any) => {
				expect(res.statusCode).toBe(401);
			});
	});

	test('should get error with status 404 when email not registered ', () =>{
		const email = 'super';
		const password = 'adminsuper';

		return request(appRoute)
			.post('/user/signin')
			.set('Content-Type', 'application/json')
			.send({email, password})
			.then((res:any) => {
				expect(res.statusCode).toBe(404);
			});
	});
});