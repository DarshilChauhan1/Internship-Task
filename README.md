#online book store

#stack
Express, Database : Mysql, ORM : sequelize

#server
npm run dev 
for Starting Development server

#User and Book Models
1. Include necessary inforamtion for users and books
2. I have created one index file for database connection and created a db object where I can retrieve all the models wherever needed


#routes
1. login and signup are open routes
2. books routes are closed routes from /api and /api checks for authentication of the user



#User Authentication
1. JWT tokens for authentication and authorization
2. User can only create and update book if loggedIn


#Books Functionality

1. creating the book post request by getting data from frontend
2. retreiving the book from the params from the frontend 
3. same for the update and delete


#Validation
implemented all types of validation for the user as well as Books


#further improvement
1. further improvments can be using foreign keys so that user can only delete and updates those books which are owned and create by them
2. I have added a logic for that in the models of index file



#Backend Questions
1. I have used JavaScript and Express framework or rather Library for server builing, I have choose express cause it provides various functionalities and 
also it is camparably faster than other frameworks

2. I have sent JWT token from frontend which I have created from login and set a middleware for the incoming book routes where that middlewares verify the token and then only it will allow us to enter that particular route 

3. For the security I have only used JWT

4. ACID properties means (Atomicity, Consistency, Isolation, Durability) 
Atomicity: Atomicity ensures that a transaction is treated as a single, indivisible unit of work. It means that either all the operations within the transaction are successfully completed, or none of them are.
Consistency: Consistency ensures that the database remains in a valid state before and after the transaction
Isolation: Isolation ensures that the concurrent execution of multiple transactions does not interfere with each other. Each transaction is isolated from other transactions until it is completed and committed
Durability: Durability ensures that the changes made by a committed transaction persist even in the event of a system failure, such as a power outage or hardware failure

6. Authentication means verify the correct user credentials when user entered first time and authorization means if a user want to go for particular route authorizarization checks if the user has access to that route or not.

7. For handling soft delete we can add one more column named deleted we can set deleted to true if we want to delete the book and keep the data of that book in the database so whenenever we want to retrieve that book we can get that by deleted : false command

8. HTTP status codes helps to describe if the res is success. It is also used for identifying which side error it is client side or server side the client side http codes are generally 401-410 and the server side errors are 500 - 503, the success code is 200.

9. The advantage of jwt tokens are that if you want to use the same authentication for multiple server jwt tokens can be in great use rather than sessionStorage and the disadvantages are that it can easily be decrypt and that one token can give access to all the user files

10. Synchronous programming is where we are just dealing with the normal Nodejs inbuilt functions were we don't requires promises or data to execute further I.E that the next line should not be dependent on other line so suppose for the database if i want the data from the database I have to use await keyword so that after the data is received we can execute further 