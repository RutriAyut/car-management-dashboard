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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const encryptPassword = require('./../utilities/encryptPassword');
const checkPassword = require('./../utilities/checkPassword');
const roleId = require('./../middleware/getRole');
const userService_1 = __importDefault(require("./../services/userService"));
const userRoleService_1 = __importDefault(require("../services/userRoleService"));
const roleService_1 = __importDefault(require("../services/roleService"));
const createToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, process.env.SIGNATURE_KEY || 'Rahasia');
};
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email.toLowerCase().trim();
    const password = req.body.password || '';
    // cek email ada apa ga
    const user = yield new userService_1.default().getByEmail({ email });
    if (!user) {
        return res.status(404).json({
            message: 'Email is not exist, Register first!',
        });
    }
    // baru cek password
    const isPasswordCorrect = yield checkPassword(password, user.password);
    if (!isPasswordCorrect) {
        return res.status(401).json({
            message: 'Password is wrong, try again!',
        });
    }
    const role = yield roleId(user.id);
    //create token
    const token = createToken({
        id: user.id,
        email: user.email,
        role: role.role_id,
    });
    const roleObj = yield new roleService_1.default().getById(role.role_id);
    if (roleObj) {
        const roleName = roleObj.name;
        return res.status(200).json({
            message: `Successfully Logged In ${roleName}`,
            roleName,
            token,
        });
    }
    return res.status(200).json({
        message: 'Successfully Logged In member',
        token,
    });
});
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const password = req.body.password || '';
    const encryptedPassword = yield encryptPassword(password);
    // cek email dulu
    const isEmail = yield new userService_1.default().getByEmail({ email });
    if (isEmail) {
        return res.status(409).json({
            message: 'Email is alredy registered',
        });
    }
    // simpan data user ke tabel users
    try {
        const userSignup = yield new userService_1.default().post({
            email,
            password: encryptedPassword,
        });
        const userId = Number(userSignup.id);
        // simpan data user ke user_role
        try {
            const userRoleSignup = yield new userRoleService_1.default().post(userId);
            if (userRoleSignup) {
                return res.status(201).json({
                    message: `User ${email} is sucessfully register`,
                    data: userSignup,
                });
            }
        }
        catch (err) {
            return res.status(400).send({ err });
        }
    }
    catch (err) {
        return res.status(400).send({ err });
    }
});
module.exports = { signup, signin };
