require('dotenv').config();
const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});


const dbAuthenticate = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

let db = {};

db.sequelize = sequelize;
db.Users = require('./User.models')(sequelize);
db.Books = require('./Books.models')(sequelize);
db.dbAuthenticate = dbAuthenticate

db.Users.beforeCreate(async (User) => {
    const hashedPassword = await bcrypt.hash(User.password, 10);
    User.password = hashedPassword;
})


// db.Users.hasMany(db.Books, {foreignKey: 'book_user_id', sourceKey : 'id' });
// db.Books.belongsTo(db.Users, {foreignKey : 'book_user_id', sourceKey : 'id'});
module.exports = db

