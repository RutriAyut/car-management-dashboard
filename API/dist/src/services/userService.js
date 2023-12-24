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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _UserService_userRepository;
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
class UserService {
    constructor() {
        _UserService_userRepository.set(this, void 0);
        __classPrivateFieldSet(this, _UserService_userRepository, new userRepository_1.default(), "f");
    }
    // register new member
    post(param) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _UserService_userRepository, "f").post(param);
        });
    }
    //get all data
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _UserService_userRepository, "f").getAll();
        });
    }
    //cek user by id
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _UserService_userRepository, "f").getById(id);
        });
    }
    //cek user by email
    getByEmail(param) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = param.email || '';
            return yield __classPrivateFieldGet(this, _UserService_userRepository, "f").getByEmail(email);
        });
    }
}
_UserService_userRepository = new WeakMap();
exports.default = UserService;
