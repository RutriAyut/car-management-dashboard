import { Request, Response, NextFunction } from "express";
import { CarModel } from "../models/cars";
import { CarTypeModel } from "../models/types";
import cloudinary from "cloudinary";
import { url } from "inspector";
// const carListData = require("./../models/dummyData");
const { v4: uuidv4 } = require("uuid");
const upload = require("./../middleware/upload");

cloudinary.v2.config({
  cloud_name: "ddwk2dfyz",
  api_key: "833823654815724",
  api_secret: "dJ1mg27i0vUIq9BcuvCLDjLWnRY",
  secure: true,
});

// Get All Data
const get = async (req: Request, res: Response) => {
  try {
    const getCars = (await CarModel.query()) || [];
    const getTypes = (await CarTypeModel.query()) || [];
    res.status(200).render("home", { cars: getCars, types: getTypes });
  } catch (error) {
    res.send("Erorr : " + error);
    console.log(error);
  }
};

// Get Data Search
const getById = async (req: Request, res: Response) => {
  const getId = req.params.id;

  let filterById = await CarModel.query().where("id", getId).throwIfNotFound();
  const getTypes = await CarTypeModel.query()
    .where("id", filterById[0].type)
    .throwIfNotFound();

  // check cars
  if (filterById.length === 0) {
    res.status(404).send("Cars Not Found");
  } else {
    res
      .status(200)
      .render("details", { cars: filterById[0], types: getTypes[0] });
  }
};

const beforeAdd = async (req: Request, res: Response) => {
  const getTypes = (await CarTypeModel.query()) || [];
  res.status(201).render("create", { types: getTypes });
};

const post = async (req: Request, res: Response) => {
  const reqBody: any = req.body;
  const id = reqBody.id;
  const name = reqBody.name;
  const rent_per_day = reqBody.rent;
  const type = reqBody.type;
  const update = new Date();

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const filebase64: string = req.file.buffer.toString("base64");
  const file: string = `data:${req.file.mimetype};base64,${filebase64}`;

  const result = await cloudinary.v2.uploader.upload(file);
  const image = result.url;

  const postCar = await CarModel.query().insert({
    id,
    name,
    rent_per_day,
    image,
    type,
    update,
  });
  res.status(201).send(`Cars ${name} is sucessfully add to data`);
};

const put = async (req: Request, res: Response) => {
  const reqBody: any = req.body;
  const reqParam = req.params;
  let filterById = await CarModel.query()
    .where("id", Number(reqParam.id))
    .throwIfNotFound();

  let data = filterById[0];

  const id = Number(reqParam.id);
  let name = data.name;
  let rent_per_day = data.rent_per_day;
  let type = data.type;
  let image = data.image;
  const update = new Date();

  name = reqBody?.name;
  rent_per_day = reqBody?.rent;
  type = reqBody?.type;

  if (!req.file) {
    image = filterById[0].image;
  } else {
    const filebase64: string = req.file.buffer.toString("base64");
    const file: string = `data:${req.file.mimetype};base64,${filebase64}`;

    const result = await cloudinary.v2.uploader.upload(file);
    image = result.url;
  }

  const updateDB = await CarModel.query().where("id", "=", id).update({
    name,
    rent_per_day,
    image,
    type,
    update,
  });
  res.status(200).send(`Cars is sucessfully update`);
};

const deleteById = async (req: Request, res: Response) => {
  const reqParam = req.params;
  const id = Number(reqParam.id);

  const filterById = await CarModel.query().where("id", id).throwIfNotFound();

  if (filterById.length === 0) {
    res.status(400).send("Data not found");
  }
  const deleteData = await CarModel.query().where("id", id).del();

  res.status(200).send(`Data car ${filterById[0].name} sucessfully delete`);
};

module.exports = {
  get,
  getById,
  beforeAdd,
  post,
  put,
  deleteById,
};
