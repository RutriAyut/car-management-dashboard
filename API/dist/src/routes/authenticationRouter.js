"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const authenticationController = require('./../controllers/authenticationController');
router.post('/signup', authenticationController.signup); //registrasi
router.post('/signin', authenticationController.signin); // login
module.exports = router;
