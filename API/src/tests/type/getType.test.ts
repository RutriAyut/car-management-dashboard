/* eslint-disable @typescript-eslint/no-explicit-any */
describe('GET Types',() => {
	const request = require('supertest');
	const appRoute = require('./../../../app');

	test('should get list of types', async() => {
		await request(appRoute)
			.get('/type')
			.then((res:any) => {
				expect(res.statusCode).toBe(200);
			});
	});
});