/* eslint-disable @typescript-eslint/no-var-requires */
import express, { Router } from 'express';
const router: Router = express.Router();
const authenticationController = require('./../controllers/authenticationController');

router.post('/signup', authenticationController.signup); //registrasi
router.post('/signin', authenticationController.signin); // login

module.exports = router;
