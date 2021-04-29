const db = require('../configs/db.conn')
const status = require('../helpers/status')
const { sendStatus, sendConfirmation, sendErr } = require('../helpers/status')

const query = require('../helpers/querybuilder')
const bodyParser = require('body-parser')

module.exports = {

    getSchedule:(req, res)=>{

        if(!req.query){
            sendStatus(res)
            return
        }

        query.executeQuery('select * from schedule where id = $1',
        [req.query.id],res)
    },

    getAll:(req,res)=>{
        
        query.executeQuery('select * from schedule',
        [],
        res)
    },

    getLastDay:(req,res)=>{

        query.executeQuery('select * from schedule where subreddit_id between 1 and 10 order by id DESC LIMIT 10',
        [],
        res)
    },

    getDays:(req,res)=>{

        query.executeQuery('select * from schedule order by posted, subreddit_id DESC',
        [],
        res)
    }
}