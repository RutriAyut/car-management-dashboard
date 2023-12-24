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
const types_1 = require("../models/types");
const carService_1 = __importDefault(require("../services/carService"));
const uploadOnline_1 = __importDefault(require("../middleware/uploadOnline"));
const userCarService_1 = __importDefault(require("../services/userCarService"));
const typeService_1 = __importDefault(require("../services/typeService"));
// Get All Data
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getCars = yield new carService_1.default().getAll();
        const getTypes = yield new typeService_1.default().getAll();
        const getLogs = yield new userCarService_1.default().getAll();
        return res.status(200).json({ getCars, getTypes, getLogs });
    }
    catch (error) {
        return res.status(404).json({ message: 'Error : No Data Found' });
    }
});
const getAllSuper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getCars = yield new carService_1.default().getAllSuper();
        return res.status(200).json({ getCars });
    }
    catch (error) {
        return res.status(404).json('Erorr : No Data Found');
        console.log(error);
    }
});
// Get Data Search
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const filterById = yield new carService_1.default().getById(id);
        if (filterById) {
            const log = yield new userCarService_1.default().getById(id);
            return res.status(200).json({ filterById, log });
        }
    }
    catch (error) {
        return res.status(404).json({ message: 'Cars By id ' + id + ' not found' });
    }
});
const getByIdSuper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    console.log('super admin');
    try {
        const filterById = yield new carService_1.default().getByIdSuper(id);
        if (filterById) {
            const log = yield new userCarService_1.default().getById(id);
            return res.status(200).json({ filterById, log });
        }
        else {
            return res.status(404).json({ message: 'Cars By id ' + id + ' not found' });
        }
    }
    catch (error) {
        return res.status(404).json({ message: 'Cars By id ' + id + ' not found' });
    }
});
const beforeAdd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getTypes = (yield types_1.CarTypeModel.query()) || [];
    return res.status(201).render('create', { types: getTypes });
});
// create car
const post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('super admin');
    const reqBody = req.body;
    const manufacture = req.body.manufacture;
    const model = req.body.model;
    const userId = reqBody.user[0].id;
    // upload image to cloudinary and get url
    const image = (yield new uploadOnline_1.default().url(req)) || 'https://i.ibb.co/k5t0hKS/image-1.png';
    try {
        const postCar = yield new carService_1.default().post(reqBody, String(image));
        const carId = Number(postCar.id);
        console.log(carId);
        const userCreate = yield new userCarService_1.default().post({ id: carId, userId });
        if (userCreate) {
            return res.status(201).json({
                massege: `Cars ${manufacture} ${model} is sucessfully add to data`,
            });
        }
    }
    catch (err) {
        return res.status(400).json({ err });
    }
});
const put = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log({ req });
    const reqParam = req.params;
    const id = Number(reqParam.id);
    const reqBody = req.body;
    const userId = reqBody.user[0].id;
    //get data old car
    const filterById = yield new carService_1.default().getById(id);
    const data = filterById[0];
    // save to variable
    let manufacture = data.manufacture;
    let model = data.model;
    let rent = data.rent_per_day;
    let type = data.type;
    let image = data.image;
    let description = data.description;
    let availableAt = data.available_at;
    let available = data.available;
    let capacity = data.capacity;
    let driver = data.driver;
    let transmission = data.transmission;
    //get input data if there are any
    if (reqBody.manufacture)
        manufacture = reqBody.manufacture;
    if (reqBody.model)
        model = reqBody.model;
    if (reqBody.rent)
        rent = reqBody.rent;
    if (reqBody.type)
        type = reqBody.type;
    if (reqBody.description)
        description = reqBody.description;
    if (reqBody.availableAt)
        availableAt = reqBody.availableAt;
    if (reqBody.available)
        available = reqBody.available;
    if (reqBody.capacity)
        capacity = reqBody.capacity;
    if (reqBody.driver)
        driver = reqBody.driver;
    if (reqBody.transmission)
        transmission = reqBody.transmission;
    // upload image to cloudinary and get url
    const imageUpload = yield new uploadOnline_1.default().url(req);
    if (imageUpload !== undefined)
        image = imageUpload;
    //update data car
    try {
        const putCar = yield new carService_1.default().put(id, manufacture, model, rent, type, String(image), description, availableAt, available, capacity, transmission, driver);
        const putUserCar = yield new userCarService_1.default().put({ id, userId });
        if (putCar && putUserCar) {
            return res
                .status(200)
                .json({ massage: `Cars ${manufacture} ${model} is sucessfully update` });
        }
    }
    catch (err) {
        return res.status(400).json({ massege: 'Data not found' });
    }
});
const deleteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqParam = req.params;
    const id = Number(reqParam.id);
    const reqBody = req.body;
    const userId = reqBody.user[0].id;
    try {
        const filterById = yield new carService_1.default().getById(id);
        const deleteData = yield new carService_1.default().delete(id);
        const deleteUserCar = yield new userCarService_1.default().delete({ id, userId });
        if (deleteData && deleteUserCar) {
            return res.status(200).json({
                massege: `Data car ${filterById[0].manufacture} ${filterById[0].model} sucessfully delete`,
            });
        }
    }
    catch (err) {
        return res.status(400).json({ massege: 'Data not found' });
    }
});
module.exports = {
    get,
    getAllSuper,
    getById,
    getByIdSuper,
    beforeAdd,
    post,
    put,
    deleteById,
};
