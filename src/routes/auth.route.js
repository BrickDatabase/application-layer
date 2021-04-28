const auth = require('../controllers/auth.controller')

const routers = require('express').Router()

routers
.get('/auth', auth.getUsername)
.get('/auths', auth.getAllInformation)
.post('/auth', auth.insertUser)
.get('/authv', auth.verifyUser)

module.exports = routers
