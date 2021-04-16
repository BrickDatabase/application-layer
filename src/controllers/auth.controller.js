const passport = require('passport')
const query = require('../helpers/querybuilder')

module.exports = {

    //the [] is for parameterized query that will escape any 
    //script like <script></script> to protect against XSS
    getUsername:(req, res)=>{
        query.executeQuery('SELECT username from users',
            [], res)
    },

    getPassword:(req, res)=>{
        query.executeQuery('SELECT password from users',
            [], res)
    },

    getAllInformation:(req, res)=>{
        query.executeQuery('SELECT * from users',
            [], res)
    },

    // Issue Here: 
    insertUser:(req, res)=>{
        query.executeQuery("INSERT INTO users (username, password, role) VALUES ($1, $2, $3) ",
        [req.body.username, req.body.password, req.body.role], res)
    }
}