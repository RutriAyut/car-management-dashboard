/* eslint-disable @typescript-eslint/no-var-requires */
import express, { Router } from 'express';
const router: Router = express.Router();
const typeController = require('./../controllers/typeController');

router.get('/', typeController.get);

module.exports = router;
