// const mysql = require('mysql2')
const {Pool, Client} = require('pg')
const dbConfig = require('./db.config')

const connectionString = 'postgresql://friedwaffle:Dare7devil@localhost:5432/subreddit'

module.exports = {
    
    conn:()=>{
        const connection = new Pool({
            user:dbConfig.USER,
            host:dbConfig.HOST,
            database:dbConfig.DB,
            password:dbConfig.PASSWORD,
            port:dbConfig.PORT
        })

        return connection
    }
}