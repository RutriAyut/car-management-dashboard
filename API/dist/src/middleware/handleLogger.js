"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleLogger = (req, res, next) => {
    console.log(`User is accessing by using user agent: ${req.get('User-Agent')}`);
    next();
};
exports.default = handleLogger;
