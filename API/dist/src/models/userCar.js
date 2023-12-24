"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCarModel = void 0;
const objection_1 = require("objection");
class UserCarModel extends objection_1.Model {
    static get tableName() {
        return 'user_car';
    }
}
exports.UserCarModel = UserCarModel;
