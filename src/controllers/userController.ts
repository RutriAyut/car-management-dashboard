import { Request, Response } from "express";
import UserService from "../services/userService";
import UserRoleService from "../services/userRoleService";

// get all data users
const getAll = async (req: Request, res: Response) => {
  try {
    const getUsers = await new UserService().getAll();
    return res.status(200).json({ getUsers });
  } catch (error) {
    return res.status(404).json({ massege: "Erorr : No User was found" });
  }
};

// update from member to admin
const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const getUsers = await new UserService().getById(id);
    try {
      const updateUserRole = await new UserRoleService().updateToAdmin(id);
      const getUsers = await new UserService().getById(id);
      res.status(200).json({ getUsers });
    } catch (err) {
      res.status(404).json({ massage: `Erorr : No User was found` });
      console.log(err);
    }
  } catch (error) {
    res.status(404).json("Erorr : " + error);
    console.log(error);
  }
};

// Get User By id
const getById = async (req: Request, res: Response) => {
  const user = req.body.user;
  try {
    const getUsers = await new UserService().getById(user[0].id);
    res.status(200).json({ getUsers });
  } catch (error) {
    res.status(404).json("Erorr : " + error);
    console.log(error);
  }
};

module.exports = { getAll, update, getById };
