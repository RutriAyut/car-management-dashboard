"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const express_1 = __importDefault(require("express"));
const authorize_1 = __importDefault(require("../middleware/authorize"));
const isSuper_1 = __importDefault(require("../middleware/isSuper"));
const router = express_1.default.Router();
const UserController = require('./../controllers/userController');
//super admin
router.get('/super/list', authorize_1.default, isSuper_1.default, UserController.getAll);
router.put('/super/update/:id', authorize_1.default, isSuper_1.default, UserController.update);
//admin dan member
router.get('/profile', authorize_1.default, UserController.getById);
module.exports = router;
