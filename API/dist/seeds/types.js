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
const types = 'types';
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex(types).del();
        // Inserts seed entries
        yield knex(types).insert([
            { id: 1, name: 'Sedan' },
            { id: 2, name: 'Convertible' },
            { id: 3, name: 'Hatchback' },
            { id: 4, name: 'Minivan' },
            { id: 5, name: 'Regular Cab Pickup' },
            { id: 6, name: 'Extended Cab Pickup' },
            { id: 7, name: 'Coupe' },
            { id: 8, name: 'Passenger Van' },
            { id: 9, name: 'SUV' },
        ]);
    });
}
exports.seed = seed;
