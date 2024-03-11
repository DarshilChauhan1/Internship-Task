const {DataTypes} = require('sequelize')


module.exports = (sequelize)=>{
    return sequelize.define("books", {
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },
        price : {
            type : DataTypes.STRING,
            allowNull : false
        },
        author :{
            type : DataTypes.STRING,
            allowNull : false
        },
        genre : {
            type : DataTypes.STRING,
            allowNull : false
        },
        price : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        ISBN : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        // book_user_id : {
        //     type : DataTypes.INTEGER,
        //     allowNull : false,
        //     references : {
        //         model : 'users',
        //         sourceKey : 'id'
        //     }
        // }
    })
}