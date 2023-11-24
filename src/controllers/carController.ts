import { Request, Response, NextFunction } from "express";
import { CarTypeModel } from "../models/types";
import CarService from "../services/carService";
import UploadOnline from "../middleware/uploadOnline";
import UserCarService from "../services/userCarService";

interface userCarLoad {
  id: number;
  userId: number;
}

// Get All Data
const get = async (req: Request, res: Response) => {
  try {
    const getCars = await new CarService().getAll();
    res.status(200).json({ getCars });
  } catch (error) {
    res.status(404).json("Erorr : No Data Found");
    console.log(error);
  }
};

const getAllSuper = async (req: Request, res: Response) => {
  try {
    const getCars = await new CarService().getAllSuper();
    res.status(200).json({ getCars });
  } catch (error) {
    res.status(404).json("Erorr : No Data Found");
    console.log(error);
  }
};

// Get Data Search
const getById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    let filterById = await new CarService().getById(id);
    res.status(200).json({ filterById });
  } catch (error) {
    res.status(404).json({ message: "No Cars was found" });
  }
};

const getByIdSuper = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    let filterById = await new CarService().getByIdSuper(id);
    if (filterById) {
      let log = await new UserCarService().getById(id);
      res.status(200).json({ filterById, log });
    } else {
      res.status(404).json({ message: "No Cars was found" });
    }
  } catch (error) {
    res.status(404).json({ message: "No Cars was found" });
  }
};

const beforeAdd = async (req: Request, res: Response) => {
  const getTypes = (await CarTypeModel.query()) || [];
  res.status(201).render("create", { types: getTypes });
};

// create car
const post = async (req: Request, res: Response) => {
  const reqBody: any = req.body;
  const name = req.body.name;
  const userId = reqBody.user[0].id;

  // upload image to cloudinary and get url
  const image = (await new UploadOnline().url(req, res)) || "Image Not Found";
  try {
    const postCar = await new CarService().post(reqBody, String(image));
    const carId = Number(postCar.id);
    console.log(carId);
    const userCreate = await new UserCarService().post({ id: carId, userId });
    // res.status(201)
    res.status(201).send(`Cars ${name} is sucessfully add to data`);
  } catch (err) {
    res.status(400).send({ err });
  }
};

const put = async (req: Request, res: Response) => {
  const reqParam = req.params;
  const id = Number(reqParam.id);

  const reqBody: any = req.body;
  const userId = reqBody.user[0].id;

  //get data old car
  let filterById = await new CarService().getById(id);
  let data = filterById[0];
  // save to variable
  let name = data.name;
  let rent = data.rent_per_day;
  let type = data.type;
  let image = data.image;

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
    const putUserCar = await new UserCarService().put({ id, userId });
    res.status(200).send(`Cars ${name} is sucessfully update`);
  } catch (err) {
    res.status(400).send({ err });
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

    res.status(200).send(`Data car ${filterById[0].name} sucessfully delete`);
  } catch (err) {
    res.status(400).send("Data not found");
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
