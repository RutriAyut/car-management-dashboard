"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesModel = void 0;
const objection_1 = require("objection");
class RolesModel extends objection_1.Model {
    static get tableName() {
        return 'roles';
    }
}
exports.RolesModel = RolesModel;
