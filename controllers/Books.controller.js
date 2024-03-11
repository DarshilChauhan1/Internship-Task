const db = require('../models/index');
const CustomError = require('../utils/CustomError');
const { RESPONSE_CODES, RESPONSE_MESSAGES } = require('../utils/ResponseCodes');

exports.createBook = async(req,res,next)=>{
    try {
        const {title, author, genre, price, ISBN} = req.body;
        if(title, author, genre, price, ISBN){
            await db.Books.create({
                title,
                author,
                genre,
                price,
                ISBN
            })
        } else {
            throw new CustomError(RESPONSE_CODES.NOT_ACCEPTABLE, RESPONSE_MESSAGES.NOT_ACCEPTABLE)
        }
        res.status(RESPONSE_CODES.SUCCESS).send({message : "Book Created SuccessFully"})
    } catch (error) {
        console.log("Error", error)
        next(error)
    }
}

exports.getBook = async(req,res,next)=>{
    try {
        const {ISBN} = req.body;
        if(ISBN){
            const getBookDetails = await db.Books.findOne({
                where : {
                    ISBN : ISBN
                }
            }) 
            if(!getBookDetails) throw new CustomError(RESPONSE_CODES.NOT_FOUND, RESPONSE_MESSAGES.NOT_FOUND)
            res.status(RESPONSE_CODES.SUCCESS).send({message : "Book Retrived Succsessfully", book : getBookDetails})
        } 
        else {
            throw new CustomError(RESPONSE_CODES.NOT_ACCEPTABLE, RESPONSE_MESSAGES.NOT_ACCEPTABLE);
        }
    } catch (error) {
        console.log("Error", error)
        next(error)
    }
}

exports.updateBook = async(req,res,next)=>{
    const t = await db.sequelize.transaction();
    try {
        const {ISBN} = req.params;
        //data is a object for updating
        const data = req.body;
        const findUserBook = await db.Books.findOne({
            where : {
                ISBN : ISBN
            }
        })
        if(findUserBook){
            await db.Books.update(data, {
                where : {
                    ISBN : ISBN
                }
            })
        } else {
            throw new CustomError(RESPONSE_CODES.NOT_FOUND, RESPONSE_MESSAGES.NOT_FOUND)
        }
        await t.commit();
        res.status(RESPONSE_CODES.SUCCESS).send({message : "Book Updated Successfully"})
        
    } catch (error) {
        await t.rollback();
        console.log("Error", error)
        next(error)
    }

}

exports.deleteBook = async(req,res,next)=>{
    const t = await db.sequelize.transaction();
    try {
        const {ISBN} = req.params;
        if(ISBN){
            const findBook = await db.Books.findOne({
                where : {
                    ISBN : ISBN
                }
            })
            if(findBook){
                await db.Books.destroy({
                    where : {
                        ISBN : ISBN
                    }
                })
            } else {
                throw new CustomError(RESPONSE_CODES.NOT_FOUND, RESPONSE_MESSAGES.NOT_FOUND)
            }
            await t.commit();
            res.status(RESPONSE_CODES.SUCCESS).send({message : "book deleted successfully"});
        }
    } catch (error) {
        await t.rollback();
        console.log("Error", error)
        next(error)
    }
}

