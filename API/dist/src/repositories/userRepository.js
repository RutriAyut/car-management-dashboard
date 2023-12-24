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
const users_1 = require("../models/users");
class UserRepository {
    // get all data users
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield users_1.UsersModel.query()
                .join('user_role', 'users.id', '=', 'user_role.id')
                .join('roles', 'user_role.role_id', '=', 'roles.id')
                .select('users.id', 'users.email', 'roles.name');
        });
    }
    //cek user by id
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield users_1.UsersModel.query()
                .where('users.id', '=', id)
                .join('user_role', 'users.id', '=', 'user_role.id')
                .join('roles', 'user_role.role_id', '=', 'roles.id')
                .select('users.id', 'users.email', 'roles.name');
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield users_1.UsersModel.query().findOne({ email }).returning('*');
        });
    }
    // register new member
    post(param) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = param.email;
            const password = param.password;
            return yield users_1.UsersModel.query().insert({
                email,
                password,
            });
        });
    }
}
exports.default = UserRepository;
