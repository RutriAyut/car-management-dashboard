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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
const userRoleService_1 = __importDefault(require("../services/userRoleService"));
// get all data users
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getUsers = yield new userService_1.default().getAll();
        return res.status(200).json({ getUsers });
    }
    catch (error) {
        return res.status(404).json({ massege: 'Erorr : No User was found' });
    }
});
// update from member to admin
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const updateUserRole = yield new userRoleService_1.default().updateToAdmin(id);
        if (updateUserRole) {
            const getUsers = yield new userService_1.default().getById(id);
            return res.status(200).json({ getUsers });
        }
    }
    catch (err) {
        return res.status(404).json({ massage: 'Erorr : No User was found' });
    }
});
// Get User By id
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body.user;
    try {
        const getUsers = yield new userService_1.default().getById(user[0].id);
        return res.status(200).json({ getUsers });
    }
    catch (error) {
        return res.status(404).json('Erorr : ' + error);
    }
});
module.exports = { getAll, update, getById };
