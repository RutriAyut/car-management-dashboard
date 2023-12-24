"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const pg_1 = __importDefault(require("pg"));
pg_1.default.defaults.ssl = true;
module.exports = {
    client: 'pg',
    connection: process.env.DATABASE_URL
};
