"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleModel = void 0;
const objection_1 = require("objection");
class UserRoleModel extends objection_1.Model {
    static get tableName() {
        return 'user_role';
    }
}
exports.UserRoleModel = UserRoleModel;
