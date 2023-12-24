"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const carController = require('./../controllers/carController');
const upload_1 = __importDefault(require("./../middleware/upload"));
const isAdmin_1 = __importDefault(require("../middleware/isAdmin"));
const authorize_1 = __importDefault(require("../middleware/authorize"));
const isSuper_1 = __importDefault(require("../middleware/isSuper"));
// show data cars
router.get('/', carController.get);
router.get('/super', authorize_1.default, isSuper_1.default, carController.getAllSuper);
router.get('/details/:id', carController.getById);
router.get('/super/details/:id', authorize_1.default, isSuper_1.default, carController.getByIdSuper);
// add data cars
router.get('/create', authorize_1.default, isAdmin_1.default, carController.beforeAdd);
router.post('/create', upload_1.default.single('picture'), authorize_1.default, isAdmin_1.default, carController.post);
// edit data cars
router.put('/update/:id', upload_1.default.single('picture'), authorize_1.default, isAdmin_1.default, carController.put);
// delete data cars
router.delete('/:id', authorize_1.default, isAdmin_1.default, carController.deleteById);
module.exports = router;
