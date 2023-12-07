import { Request, Response, NextFunction } from "express";
import TypeService from "../services/typeService";

const get = async (req: Request, res: Response) => {
  console.log("hello");
  try {
    const getTypes = await new TypeService().getAll();
    res.status(200).json({ getTypes });
  } catch (error) {
    res.status(404).json({ message: "Error : No Data Found" });
  }
};

module.exports = { get };
