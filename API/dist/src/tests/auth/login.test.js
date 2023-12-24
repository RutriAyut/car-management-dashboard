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
describe('POST user/signin', () => {
    const request = require('supertest');
    const appRoute = require('./../../../app');
    test('should get bearer for login with status 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const email = 'super_admin@gmail.com';
        const password = 'superadmin';
        yield request(appRoute)
            .post('/user/signin')
            .set('Content-Type', 'application/json')
            .send({ email, password })
            .then((res) => {
            expect(res.statusCode).toBe(200);
        });
    }));
    test('should get error with status 401 when password incorect', () => {
        const email = 'super_admin@gmail.com';
        const password = 'adminsuper';
        return request(appRoute)
            .post('/user/signin')
            .set('Content-Type', 'application/json')
            .send({ email, password })
            .then((res) => {
            expect(res.statusCode).toBe(401);
        });
    });
    test('should get error with status 404 when email not registered ', () => {
        const email = 'super';
        const password = 'adminsuper';
        return request(appRoute)
            .post('/user/signin')
            .set('Content-Type', 'application/json')
            .send({ email, password })
            .then((res) => {
            expect(res.statusCode).toBe(404);
        });
    });
});
