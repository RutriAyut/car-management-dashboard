import { Request, Response, NextFunction } from "express";
import { CarTypeModel } from "../models/types";
import CarService from "../services/carService";
import TypeService from "../services/typeService";
import UploadOnline from "../middleware/uploadOnline";

// const carListData = require("./../models/dummyData");
const { v4: uuidv4 } = require("uuid");

// Get All Data
const get = async (req: Request, res: Response) => {
  try {
    const getCars = await new CarService().getAll();
    res.status(200).json({ getCars });
  } catch (error) {
    res.status(404).json("Erorr : " + error);
    console.log(error);
  }
};

// Get Data Search
const getById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    let filterById = await new CarService().getById(id);
    res.status(200).json(filterById);
  } catch (error) {
    res.status(404).json({ message: "No Cars was found" });
  }
};

const beforeAdd = async (req: Request, res: Response) => {
  const getTypes = (await CarTypeModel.query()) || [];
  res.status(201).render("create", { types: getTypes });
};

const post = async (req: Request, res: Response) => {
  const reqBody: any = req.body;
  const name = reqBody.name;

  // upload image to cloudinary and get url
  const image = await new UploadOnline().url(req, res);

  try {
    const postCar = await new CarService().post(reqBody, String(image));
    res.status(201).send(`Cars ${name} is sucessfully add to data`);
  } catch (err) {
    res.status(400).send(`Create Car error`);
  }
};

const put = async (req: Request, res: Response) => {
  const reqBody: any = req.body;
  const reqParam = req.params;
  const id = Number(reqParam.id);

  //get data old car
  let filterById = await new CarService().getById(id);
  let data = filterById[0];
  // save to variable
  let name = data.name;
  let rent = data.rent_per_day;
  let type = data.type;
  let image = data.image;
  // const update = new Date();

  //get input data if there are any
  if (reqBody.name) name = reqBody.name;
  if (reqBody.rent) rent = reqBody.rent;
  if (reqBody.type) type = reqBody.type;

  // upload image to cloudinary and get url
  const imageUpload = await new UploadOnline().url(req, res);
  if (imageUpload !== undefined) image = imageUpload;

  //update data car
  try {
    const putCar = await new CarService().put(
      id,
      name,
      rent,
      type,
      String(image)
    );
    res.status(201).send(`Cars ${name} is sucessfully update`);
  } catch (err) {
    res.status(400).send(`Update Car error`);
  }
};

const deleteById = async (req: Request, res: Response) => {
  const reqParam = req.params;
  const id = Number(reqParam.id);

  try {
    const filterById = await new CarService().getById(id);
    const deleteData = await new CarService().delete(id);

    res.status(200).send(`Data car ${filterById[0].name} sucessfully delete`);
  } catch (err) {
    res.status(400).send("Data not found");
  }
};

module.exports = {
  get,
  getById,
  beforeAdd,
  post,
  put,
  deleteById,
};
