const auth = require('../controllers/auth.controller')

const routers = require('express').Router()

routers
.get('/getUsername', auth.getUsername)
.get('/getPassword', auth.getPassword)
.get('/getAllInformation', auth.getAllInformation)
.post('/insertUser', auth.insertUser)

module.exports = routers
