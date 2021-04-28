const passport = require('passport')
const query = require('../helpers/querybuilder')
const hash = require('../helpers/hash')

module.exports = {

    //the [] is for parameterized query that will escape any 
    //script like <script></script> to protect against XSS
    getUsername:(req, res)=>{
        query.executeQuery('SELECT username from users',
            [], res)
    },

    getAllInformation:(req, res)=>{
        query.executeQuery('SELECT * from users',
            [], res)
    },

    // Issue Here: 
    insertUser:async(req, res)=>{

        hashed = await hash.hashed(req.body.password)

        query.executeQuery("INSERT INTO users (username, password) VALUES ($1, $2) ",
        [req.body.username, hashed], res)
    },

    verifyUser:(req, res)=>{

        query.verifyQuery("select * from users where username = $1",
        [req.query.username],req.query.password, res)

    }


}