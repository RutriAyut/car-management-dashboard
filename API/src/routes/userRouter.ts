import express, { Router } from "express";
import authorize from "../middleware/authorize";
import isSuper from "../middleware/isSuper";

const router: Router = express.Router();
const UserController = require("./../controllers/userController");

//super admin
router.get("/super/list", authorize, isSuper, UserController.getAll);
router.put("/super/update/:id", authorize, isSuper, UserController.update);

//admin dan member
router.get("/profile", authorize, UserController.getById);
module.exports = router;
