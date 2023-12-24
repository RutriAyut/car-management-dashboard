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
describe('GET cars', () => {
    const request = require('supertest');
    const appRoute = require('./../../../app');
    describe('Get Car whitout login', () => {
        test('should get list of cars', () => __awaiter(void 0, void 0, void 0, function* () {
            yield request(appRoute)
                .get('/cars')
                .then((res) => {
                expect(res.statusCode).toBe(200);
            });
        }));
        test('should get detail of car', () => __awaiter(void 0, void 0, void 0, function* () {
            yield request(appRoute)
                .get('/cars/details/1')
                .then((res) => {
                expect(res.statusCode).toBe(200);
            });
        }));
    });
    describe('Get Car as super admin and admin', () => {
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
        test('should get list of cars', () => __awaiter(void 0, void 0, void 0, function* () {
            yield request(appRoute)
                .get('/cars/super')
                .set('Authorization', `Bearer ${token}`)
                .then((res) => {
                expect(res.statusCode).toBe(200);
            });
        }));
        test('should return detail car', () => __awaiter(void 0, void 0, void 0, function* () {
            yield request(appRoute)
                .get('/cars/super/details/1')
                .set('Authorization', `Bearer ${token}`)
                .then((res) => {
                expect(res.statusCode).toBe(200);
            });
        }));
    });
});
