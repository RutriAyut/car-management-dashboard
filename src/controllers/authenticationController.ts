import { Request, Response } from "express";
const encryptPassword = require("./../utilities/encryptPassword");
const checkPassword = require("./../utilities/checkPassword");
import UserService from "./../services/userService";
import UserRoleService from "../services/userRoleService";

const get = async (req: Request, res: Response) => {};

const getById = async (req: Request, res: Response) => {};

const signin = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  const encryptedPassword = await encryptPassword(password);
  const isPasswordCorrect = await checkPassword(password, encryptedPassword);
};

const signup = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  const encryptedPassword = await encryptPassword(password);

  const userSignup = await new UserService().post({
    email,
    password: encryptedPassword,
  });

  const userId = Number(userSignup.id);
  const userRoleSignup = await new UserRoleService().post(userId);

  res.status(201).send(`User ${email} is sucessfully register`);
};

module.exports = { signup, signin };
