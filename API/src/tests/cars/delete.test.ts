/* eslint-disable @typescript-eslint/no-explicit-any */
describe('DELETE car', () =>{
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

	test('should delete car with given id with response code 200',async () => {
		await request(appRoute)
			.delete('/cars/5')
			.set('Authorization', `Bearer ${token}`)
			.then((res:any) => {
				expect(res.statusCode).toBe(200);
			});    
	});
});