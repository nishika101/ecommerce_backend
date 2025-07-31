

const mysql = require('mysql2');
const dotenv = require('dotenv');

//loads env file
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections:true,
    connectionLimit: 10,
    queueLimit: 0,
});

pool.getConnection((err, connection) => {
    if(err){
        console.log('DB Connection Failed: ', err.message);
    }else{
        console.log('Successfully connected to Mysql Database!');
        //release the pool
        connection.release();
        
    }
})

module.exports = pool;