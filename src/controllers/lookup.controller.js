// const db = require('../configs/db.conn')
const status = require('../helpers/status')
const {sendStatus, sendErr, sendConfirmation } = status

const query = require('../helpers/querybuilder')

module.exports = {

    create:(req, res)=>{
        
        if(!req.body.name){
            sendStatus(res)
            return
        }
        query.executeQuery('insert into lookups(name, abbreviation) values ($1,$2)',
        [req.body.name,req.body.abbreviation],
        res)
    },

    getAll:(req,res)=>{

        query.executeQuery('select * from lookups',
        [],
        res)
    },

    getOne:(req,res)=>{

        if(!req.query.id){
            sendStatus(res)
            return
        }

        query.executeQuery('select * from lookups where id = $1',
        [req.query.id],
        res)
    },

    update:(req,res)=>{


        if(!req.body){
            sendStatus(res)
            return
        }

        query.executeQuery('update lookups set name = $1, abbreviation = $2 where id =$3',
        [req.body.name, req.body.abbreviation, req.body.id],
        res)
    },

    delete:(req,res)=>{
        
        if(!req.query.id){
            sendStatus(res)
            return
        }

        query.executeQuery('delete from lookups where id = $1',
        [req.query.id],
        res)
    },

    deleteAll:(req,res)=>{

        query.executeQuery('delete from lookups',
        [],
        res)
    }

}