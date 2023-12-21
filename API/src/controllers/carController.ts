/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { CarTypeModel } from '../models/types';
import CarService from '../services/carService';
import UploadOnline from '../middleware/uploadOnline';
import UserCarService from '../services/userCarService';
import TypeService from '../services/typeService';

// Get All Data
const get = async (req: Request, res: Response) => {
	try {
		const getCars = await new CarService().getAll();
		const getTypes = await new TypeService().getAll();
		const getLogs = await new UserCarService().getAll();
		return res.status(200).json({ getCars, getTypes, getLogs });
	} catch (error) {
		return res.status(404).json({ message: 'Error : No Data Found' });
	}
};

const getAllSuper = async (req: Request, res: Response) => {
	try {
		const getCars = await new CarService().getAllSuper();
		return res.status(200).json({ getCars });
	} catch (error) {
		return res.status(404).json('Erorr : No Data Found');
		console.log(error);
	}
};

// Get Data Search
const getById = async (req: Request, res: Response) => {
	const id = Number(req.params.id);

	try {
		const filterById = await new CarService().getById(id);
		if (filterById) {
			const log = await new UserCarService().getById(id);
			return res.status(200).json({ filterById, log });
		}
	} catch (error) {
		return res.status(404).json({ message: 'Cars By id ' + id + ' not found' });
	}
};

const getByIdSuper = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	console.log('super admin');
	try {
		const filterById = await new CarService().getByIdSuper(id);
		if (filterById) {
			const log = await new UserCarService().getById(id);
			return res.status(200).json({ filterById, log });
		} else {
			return res.status(404).json({ message: 'Cars By id ' + id + ' not found' });
		}
	} catch (error) {
		return res.status(404).json({ message: 'Cars By id ' + id + ' not found' });
	}
};

const beforeAdd = async (req: Request, res: Response) => {
	const getTypes = (await CarTypeModel.query()) || [];
	return res.status(201).render('create', { types: getTypes });
};

// create car
const post = async (req: Request, res: Response) => {
	console.log('super admin');
	const reqBody: any = req.body;
	const manufacture = req.body.manufacture;
	const model = req.body.model;
	const userId = reqBody.user[0].id;

	// upload image to cloudinary and get url
	const image = (await new UploadOnline().url(req)) || 'https://i.ibb.co/k5t0hKS/image-1.png';
	try {
		const postCar = await new CarService().post(reqBody, String(image));
		const carId = Number(postCar.id);
		console.log(carId);
		const userCreate = await new UserCarService().post({ id: carId, userId });
		if(userCreate) {
			return res.status(201).json({
				massege: `Cars ${manufacture} ${model} is sucessfully add to data`,
			});
		}
	} catch (err) {
		return res.status(400).json({ err });
	}
};

const put = async (req: Request, res: Response) => {
	console.log({req});
	const reqParam = req.params;
	const id = Number(reqParam.id);

	const reqBody: any = req.body;
	const userId = reqBody.user[0].id;

	//get data old car
	const filterById = await new CarService().getById(id);
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
	if (reqBody.manufacture) manufacture = reqBody.manufacture;
	if (reqBody.model) model = reqBody.model;
	if (reqBody.rent) rent = reqBody.rent;
	if (reqBody.type) type = reqBody.type;
	if (reqBody.description) description = reqBody.description;
	if (reqBody.availableAt) availableAt = reqBody.availableAt;
	if (reqBody.available) available = reqBody.available;
	if (reqBody.capacity) capacity = reqBody.capacity;
	if (reqBody.driver) driver = reqBody.driver;
	if (reqBody.transmission) transmission = reqBody.transmission;

	// upload image to cloudinary and get url
	const imageUpload = await new UploadOnline().url(req);
	if (imageUpload !== undefined) image = imageUpload;

	//update data car
	try {
		const putCar = await new CarService().put(
			id,
			manufacture,
			model,
			rent,
			type,
			String(image),
			description,
			availableAt,
			available,
			capacity,
			transmission,
			driver
		);
		const putUserCar = await new UserCarService().put({ id, userId });
		if(putCar && putUserCar){
			return res
				.status(200)
				.json({ massage: `Cars ${manufacture} ${model} is sucessfully update` });
		}
	} catch (err) {
		return res.status(400).json({ massege: 'Data not found' });
	}
};

const deleteById = async (req: Request, res: Response) => {
	const reqParam = req.params;
	const id = Number(reqParam.id);

	const reqBody: any = req.body;
	const userId = reqBody.user[0].id;

	try {
		const filterById = await new CarService().getById(id);
		const deleteData = await new CarService().delete(id);
		const deleteUserCar = await new UserCarService().delete({ id, userId });
		if(deleteData && deleteUserCar) {
			return res.status(200).json({
				massege: `Data car ${filterById[0].manufacture} ${filterById[0].model} sucessfully delete`,
			});}
	} catch (err) {
		return res.status(400).json({ massege: 'Data not found' });
	}
};

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
