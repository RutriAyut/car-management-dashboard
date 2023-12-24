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
const userService_1 = __importDefault(require("../services/userService"));
const authorize = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const bearerToken = req.headers.authorization;
        const token = ((_a = bearerToken === null || bearerToken === void 0 ? void 0 : bearerToken.split('Bearer ')) === null || _a === void 0 ? void 0 : _a[1]) || '';
        const tokenPayload = jsonwebtoken_1.default.verify(token, process.env.SIGNATURE_KEY || 'Rahasia');
        if (typeof tokenPayload == 'object') {
            req.body.user = yield new userService_1.default().getById(tokenPayload.id);
            next();
        }
        else {
            return res.status(401).json({
                message: 'Unauthorized',
            });
        }
    }
    catch (error) {
        return res.status(401).json({
            message: 'Unauthorized',
        });
    }
});
exports.default = authorize;
