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
const userRole_1 = require("../models/userRole");
class UserRoleRepository {
    // save data user with role member
    post(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const roleId = 3;
            return yield userRole_1.UserRoleModel.query().insert({
                id: userId,
                role_id: roleId,
            });
        });
    }
    // change member to admin by superadmin
    updateToAdmin(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userRole_1.UserRoleModel.query()
                .where('id', '=', idUser)
                .update({ role_id: 2 });
        });
    }
    // get role id by user id
    getRoleId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userRole_1.UserRoleModel.query().findOne({ id }).returning('*');
        });
    }
}
exports.default = UserRoleRepository;
