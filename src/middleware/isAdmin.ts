import { NextFunction, Request, Response } from "express";
import UserService from "../services/userService";

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  if (req.body.user) {
    const user = req.body.user;
    if (user[0].name === "SUPER" || user[0].name === "ADMIN") {
      next();
    } else {
      res.status(401).json({
        message: "Unauthorized",
      });
    }
  }
};

export default isAdmin;
