// const mysql = require('mysql2')
const {Pool, Client} = require('pg')
const dbConfig = require('./db.config')

const connectionString = 'postgresql://edward_riley:Dare7devil@localhost:5432/subreddit'

module.exports = {
    
    conn:()=>{
        const connection = new Pool({
            // user:dbConfig.USER,
            // host:dbConfig.HOST,
            // database:dbConfig.DB,
            // password:dbConfig.PASSWORD,
            // port:dbConfig.PORT
            connectionString:dbConfig.SCHEMA_URL,
            ssl:{
                rejectUnauthorized:false
            }
        })

        return connection
    }
}


/*const connection = new Pool({
    user:dbConfig.USER,
    host:dbConfig.HOST,
    database:dbConfig.DB,
    password:dbConfig.PASSWORD,
    port:dbConfig.PORT
})*/