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
/* eslint-disable @typescript-eslint/no-explicit-any */
const cars_1 = require("../models/cars");
class CarRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cars_1.CarModel.query().where('isDeleted', '=', false);
        });
    }
    getAllSuper() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cars_1.CarModel.query();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cars_1.CarModel.query()
                .where({ id })
                .where('isDeleted', '=', false)
                .throwIfNotFound();
        });
    }
    getByIdSuper(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cars_1.CarModel.query().where({ id }).throwIfNotFound();
        });
    }
    post(reqBody, img) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = reqBody.id;
            const manufacture = reqBody.manufacture;
            const model = reqBody.model;
            const rent_per_day = reqBody.rent;
            const type = reqBody.type;
            const image = img;
            const description = reqBody.description;
            const available_at = reqBody.availableAt;
            const available = reqBody.available;
            const capacity = reqBody.capacity;
            const driver = reqBody.driver;
            const transmission = reqBody.transmission;
            const isDeleted = false;
            return yield cars_1.CarModel.query().insert({
                id,
                manufacture,
                model,
                rent_per_day,
                image,
                type,
                description,
                available_at,
                available,
                capacity,
                driver,
                transmission,
                isDeleted,
            });
        });
    }
    put(id, manufacture, model, rent_per_day, type, image, description, available_at, available, capacity, transmission, driver) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cars_1.CarModel.query().where('id', '=', id).update({
                manufacture,
                model,
                rent_per_day,
                image,
                type,
                description,
                available_at,
                available,
                capacity,
                transmission,
                driver,
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cars_1.CarModel.query().where({ id }).update({
                isDeleted: true,
            });
        });
    }
}
exports.default = CarRepository;
