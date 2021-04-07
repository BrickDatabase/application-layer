const {v4: uuidv4} = require('uuid')

module.exports = {

    generateToken:()=>{
        
        const token = uuidv4()
        return token
    },

    expireToken:()=>{
        
        return null
    }
}