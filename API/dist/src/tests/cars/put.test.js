"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable @typescript-eslint/no-explicit-any */
describe('PUT car', () => {
    const request = require('supertest');
    const appRoute = require('./../../../app');
    let token = '';
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const email = 'super_admin@gmail.com';
        const password = 'superadmin';
        const response = yield request(appRoute)
            .post('/user/signin')
            .set('Content-Type', 'application/json')
            .send({ email, password })
            .then((res) => {
            return res;
        });
        token = response._body.token;
    }));
    test('should update car with given data with response code 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const manufacture = 'Ford';
        const model = 'F150';
        const rent = 900000;
        const type = 1;
        const picture = '';
        const description = 'Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.';
        const availableAt = new Date;
        const available = true;
        const capacity = 5;
        const driver = true;
        const transmission = 'Manual';
        yield request(appRoute)
            .put('/cars/update/1')
            .set('Authorization', `Bearer ${token}`)
            .send({ manufacture, model, rent, type, picture, description, availableAt, available, capacity, driver, transmission })
            .then((res) => {
            expect(res.statusCode).toBe(200);
        });
    }));
});
