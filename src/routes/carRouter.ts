import express, { Router } from "express";
const router: Router = express.Router();
const carController = require("./../controllers/carController");
import upload from "./../middleware/upload";

// show data cars
router.get("/", carController.get);
router.get("/details/:id", carController.getById);

// add data cars
router.get("/create", carController.beforeAdd);
router.post("/create", upload.single("picture"), carController.post);

// edit data cars
router.put("/update/:id", upload.single("picture"), carController.put);

// delete data cars
router.delete("/:id", carController.deleteById);

module.exports = router;
