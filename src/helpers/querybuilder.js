const db = require('../configs/db.conn')
const status = require('../helpers/status')
const {sendStatus, sendErr, sendConfirmation } = status

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
    }
}