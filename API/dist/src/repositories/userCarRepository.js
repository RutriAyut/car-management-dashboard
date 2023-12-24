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
const userCar_1 = require("../models/userCar");
class UserCarRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userCar_1.UserCarModel.query();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userCar_1.UserCarModel.query().where({ id }).throwIfNotFound();
        });
    }
    post(param) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = param.id;
            const createBy = param.userId;
            const createAt = new Date();
            return yield userCar_1.UserCarModel.query().insert({
                id: id,
                create_by: createBy,
                create_at: createAt,
            });
        });
    }
    put(param) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = param.id;
            const updateBy = param.userId;
            const updateAt = new Date();
            return yield userCar_1.UserCarModel.query().where({ id }).update({
                update_by: updateBy,
                update_at: updateAt,
            });
        });
    }
    delete(param) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = param.id;
            const deleteBy = param.userId;
            const deleteAt = new Date();
            return yield userCar_1.UserCarModel.query().where({ id }).update({
                delete_by: deleteBy,
                delete_at: deleteAt,
            });
        });
    }
}
exports.default = UserCarRepository;
