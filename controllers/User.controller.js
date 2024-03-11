require('dotenv').config()
const db = require('../models/index');
const CustomError = require('../utils/CustomError');
const ResponseCodes = require('../utils/ResponseCodes');
const { RESPONSE_CODES, RESPONSE_MESSAGES } = require('../utils/ResponseCodes')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
exports.signUpController = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (username && password) {
            const existsUser = await db.Users.findOne({
                where: {
                    username: username
                }
            })
            console.log(existsUser)
            if (existsUser) throw new CustomError(RESPONSE_CODES.NOT_ACCEPTABLE, RESPONSE_MESSAGES.NOT_ACCEPTABLE);
            await db.Users.create({
                username: username,
                password: password
            })
        }
        res.status(RESPONSE_CODES.SUCCESS).send({ message: "Signed Up SuccessFully" })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.loginController = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (username && password) {
            let verifyUser = await db.Users.findOne({
                where: {
                    username: username
                }
            })
            verifyUser = JSON.parse(JSON.stringify(verifyUser));
            if (verifyUser) {
                const passwordVerify = await bcrypt.compare(password, verifyUser.password);
                if (!passwordVerify) throw new CustomError(RESPONSE_CODES.ACCESS_NOT, RESPONSE_MESSAGES.ACCESS_NOT)
                const Token = jwt.sign({
                    username: username,
                }, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: "1d"
                })
                res.status(RESPONSE_CODES.SUCCESS).send({message : "Login Successfully", token : Token})
            }
        } else {
            throw new CustomError(RESPONSE_CODES.BAD_REQUEST).send({message : "Username and Password Required"})
        }
    } catch (error) {
        console.log("error", error);
        next(error);
    }
}