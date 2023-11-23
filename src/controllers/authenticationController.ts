import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const encryptPassword = require("./../utilities/encryptPassword");
const checkPassword = require("./../utilities/checkPassword");
const roleId = require("./../middleware/getRole");

import UserService from "./../services/userService";
import UserRoleService from "../services/userRoleService";

interface UserPayload {
  id?: number;
  email: string;
  password?: string;
  role?: string;
}

const createToken = (payload: UserPayload) => {
  return jwt.sign(payload, process.env.SIGNATURE_KEY || "Rahasia");
};

const signin = async (req: Request, res: Response) => {
  const email = req.body.email.toLowerCase().trim();
  const password = req.body.password || "";

  // cek email ada apa ga
  const user = await new UserService().getByEmail({ email });
  if (!user) {
    return res.status(404).json({
      message: "Email is not exist, try another one!",
      data: [],
    });
  }

  // baru cek password
  const isPasswordCorrect = await checkPassword(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(401).json({
      message: "Password is wrong, try again!",
      data: [],
    });
  }

  const role = await roleId(user.id);
  //create token
  const token = createToken({
    id: user.id,
    email: user.email,
    role: role.role_id,
  });
  return res.status(200).json({
    status: 200,
    message: "Successfully Logged In",
    token,
  });
};

const signup = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;
  const password = req.body.password || "";
  const encryptedPassword = await encryptPassword(password);

  // cek email dulu
  const isEmail = await new UserService().getByEmail({ email });
  if (isEmail) {
    return res.status(400).json(`email alredy registered`);
  }

  // simpan data user ke tabel users
  try {
    const userSignup = await new UserService().post({
      email,
      password: encryptedPassword,
    });
    const userId = Number(userSignup.id);
    // simpan data user ke user_role
    try {
      const userRoleSignup = await new UserRoleService().post(userId);
      res.status(201).send(`User ${email} is sucessfully register`);
    } catch (err) {
      res.status(400).send({ err });
    }
  } catch (err) {
    res.status(400).send({ err });
  }
};

module.exports = { signup, signin };
