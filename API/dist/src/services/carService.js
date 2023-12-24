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
var _CarService_carRepository;
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const carRepository_1 = __importDefault(require("../repositories/carRepository"));
class CarService {
    constructor() {
        _CarService_carRepository.set(this, void 0);
        __classPrivateFieldSet(this, _CarService_carRepository, new carRepository_1.default(), "f");
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _CarService_carRepository, "f").getAll();
        });
    }
    getAllSuper() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _CarService_carRepository, "f").getAllSuper();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _CarService_carRepository, "f").getById(id);
        });
    }
    getByIdSuper(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _CarService_carRepository, "f").getByIdSuper(id);
        });
    }
    post(req, img) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _CarService_carRepository, "f").post(req, img);
        });
    }
    put(id, manufacture, model, rent, type, img, description, availableAt, available, capacity, transmission, driver) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _CarService_carRepository, "f").put(id, manufacture, model, rent, type, img, description, availableAt, available, capacity, transmission, driver);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _CarService_carRepository, "f").delete(id);
        });
    }
}
_CarService_carRepository = new WeakMap();
exports.default = CarService;
