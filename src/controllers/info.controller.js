const db = require('../configs/db.conn')
const status = require('../helpers/status')
const { sendStatus, sendConfirmation, sendErr } = require('../helpers/status')

const query = require('../helpers/querybuilder')

module.exports = {

    create:(req, res)=>{

        if(!req.body){
            sendStatus(res)
            return
        }

        console.log(req.body)
        query.executeQuery('insert into information(date, subscribers, active_subscribers, submission, comments, subreddit_id) values ($1,$2,$3,$4,$5,$6)',
        [req.body.date, req.body.subscribers, req.body.active_subscribers, 
        req.body.submission, req.body.comments, req.body.subreddit_id],
        res)
    },

    getAll:(req,res)=>{

        query.executeQuery('select * from information',
        [],
        res)
    },

    getOne:(req,res)=>{
        
        if(!req.query.id){
            sendStatus(res)
            return
        }

        query.executeQuery('select * from information where id = $1',
        [req.query.id],
        res)
    },

    update:(req,res)=>{

        if(!req.body){
            sendStatus(res)
            return
        }

        query.executeQuery('update information set date = $1 , subscribers = $2, active_subscribers = $3, submission = $4, comments = $5 where id = $6',
        [req.body.dates, req.body.subscribers, 
        req.body.active_subscribers, req.body.submission, 
        req.body.comments, req.body.id],
        res)
    },

    delete:(req,res)=>{
        
        if(!req.query.id){
            sendStatus(res)
            return
        }

        query.executeQuery('delete from information where id = $1',
        [req.query.id],
        res)
    },

    deleteAll:(req,res)=>{

        query.executeQuery('delete from information',
        [],
        res)
    }
}