require('dotenv').config();
const express  = require('express');
const cors = require('cors');
const db = require('./models/index');
const {authenticateUser} = require('./middlewares/UserAuth')
const {exceptionHandling} = require('./middlewares/ExceptionHandling')
const userRouter = require('./routes/User.route')
const bookRouter = require('./routes/Books.route')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

db.dbAuthenticate();
db.sequelize.sync({alter :true})
.then (()=> {
    console.log("Database Synced Successfully")
})
.catch((err)=>{
    console.log("Error in syncing Database", err)
})

app.listen(process.env.PORT || 4000, ()=>{
    console.log("Server is Listening")
})


app.use('/', userRouter);
app.use('/api/*', authenticateUser)
app.use('/api', bookRouter)

app.use(exceptionHandling)




