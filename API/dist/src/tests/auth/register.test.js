"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
describe('POST user/signup', () => {
    const request = require('supertest');
    const appRoute = require('./../../../app');
    test('succesfully create user with status 201', () => __awaiter(void 0, void 0, void 0, function* () {
        const email = 'user@gmail.com';
        const password = '123';
        yield request(appRoute)
            .post('/user/signup')
            .set('Content-Type', 'application/json')
            .send({ email, password })
            .then((res) => {
            expect(res.statusCode).toBe(201);
        });
    }));
    test('sould get massage Email is alredy registered with status 409', () => __awaiter(void 0, void 0, void 0, function* () {
        const email = 'super_admin@gmail.com';
        const password = '123';
        yield request(appRoute)
            .post('/user/signup')
            .set('Content-Type', 'application/json')
            .send({ email, password })
            .then((res) => {
            expect(res.statusCode).toBe(409);
        });
    }));
});
