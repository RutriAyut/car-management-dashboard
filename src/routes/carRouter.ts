import express, { Router } from "express";
const router: Router = express.Router();
const carController = require("./../controllers/carController");
import upload from "./../middleware/upload";
import isAdmin from "../middleware/isAdmin";
import authorize from "../middleware/authorize";
import isSuper from "../middleware/isSuper";

// show data cars
router.get("/", carController.get);
router.get("/super", authorize, isSuper, carController.getAllSuper);
router.get("/details/:id", carController.getById);
router.get(
  "/super/details/:id",
  authorize,
  isSuper,
  carController.getByIdSuper
);
// add data cars
router.get("/create", authorize, isAdmin, carController.beforeAdd);
router.post(
  "/create",
  upload.single("picture"),
  authorize,
  isAdmin,
  carController.post
);

// edit data cars
router.put(
  "/update/:id",
  upload.single("picture"),
  authorize,
  isAdmin,
  carController.put
);

// delete data cars
router.delete("/:id", authorize, isAdmin, carController.deleteById);

module.exports = router;
