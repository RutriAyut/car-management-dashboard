/* eslint-disable @typescript-eslint/no-explicit-any */
describe('PUT car', () =>{
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

	test('should update car with given data with response code 200',async () => {
		const manufacture = 'Ford';
		const model = 'F150';
		const rent = 900000;
		const type = 1;
		const picture = '';
		const description = 'Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.';
		const availableAt = new Date;
		const available= true;
		const capacity = 5;
		const driver = true;
		const transmission = 'Manual';

		await request(appRoute)
			.put('/cars/update/1')
			.set('Authorization', `Bearer ${token}`)
			.send({manufacture,model,rent,type,picture,description,availableAt,available,capacity,driver, transmission})
			.then((res:any) => {
				expect(res.statusCode).toBe(200);
			});    
	});
});