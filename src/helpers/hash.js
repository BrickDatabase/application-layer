// const argon2 = require('argon2')
const aes = require('aes256')
var key = "brickheroes"

module.exports = {

    hashed:async(pwd)=>{

        const hash = await aes.encrypt(key,pwd)
        return hash
    },

    verifyMatch:async(hashed,pwd,res)=>{

        const dehashed = await aes.decrypt(key,hashed)

        if(dehashed == pwd)
        {
            res.send({result:"valid"})
        }
        else
        {
            res.send({result:"invalid"})
        }
    }
}