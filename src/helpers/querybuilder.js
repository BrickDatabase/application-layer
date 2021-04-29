const db = require('../configs/db.conn')
const status = require('../helpers/status')
const {sendStatus, sendErr, sendConfirmation } = status
const hash = require('../helpers/hash')

module.exports = {

    executeQuery:(query,parameters,res)=>{
        db.conn().connect((err, client, done)=>{
            if(err) console.log(err)
            client.query(query,parameters)
            .then(results=>{

                res.send({result:results})  
            })
            .catch(e =>console.log(e.stack))
        })
    },

    verifyQuery:(query,parameters,pwd,res)=>{
        db.conn().connect((err,client,done)=>{
            client.query(query,parameters)
            .then(results=>{

               const status = hash.verifyMatch(results.rows[0].password,pwd,res)
               
            })
            .catch(e=>console.log(e.stack))
        })
    }


}