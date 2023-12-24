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
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const users = 'users';
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex(users).del();
        // Inserts seed entries
        yield knex(users).insert([
            {
                id: 1,
                email: 'super_admin@gmail.com',
                password: '$2a$12$6Dyt00l.nPbv1cy09YhvoezbCriIrFzsgSvfmkkW6YXWmay9eX0oG',
            },
            {
                id: 2,
                email: 'user@mail.com',
                password: '$2a$12$c0oh78VffFfv8pjYf7g07OLKAvs2zpSuqTh47u5nVQ4bVnnLE8IS',
            },
        ]);
    });
}
exports.seed = seed;
