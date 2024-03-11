const express = require('express');
const { signUpController, loginController } = require('../controllers/User.controller');
const Router = express.Router();


Router.post('/signup', signUpController);
Router.post('/login', loginController);


module.exports = Router