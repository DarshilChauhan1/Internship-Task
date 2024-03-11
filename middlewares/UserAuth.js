require('dotenv').config()
const jwt = require('jsonwebtoken');
const CustomError = require('../utils/CustomError');
const { RESPONSE_CODES, RESPONSE_MESSAGES } = require('../utils/ResponseCodes');

exports.authenticateUser = async(req,res,next)=>{
    try {
        let Token = req.headers.authorization.split(" ")[1];
        if(Token){
            const authenticateUser = jwt.verify(
                Token,
                process.env.ACCESS_TOKEN_SECRET
            )
            if(!authenticateUser) throw new CustomError(RESPONSE_CODES.ACCESS_NOT, RESPONSE_MESSAGES.ACCESS_NOT)
            next();
        }
        else {
            throw new CustomError(RESPONSE_CODES.NOT_FOUND, RESPONSE_MESSAGES.NOT_FOUND)
        }

    } catch (error) {
        console.log("Error", error);
        next(error)
    }
}