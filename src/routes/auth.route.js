const auth = require('../controllers/auth.controller')

const routers = require('express').Router()

routers.get('/getUsername', auth.getUsername)
routers.get('/getPassword', auth.getPassword)
routers.get('/getAllInformation', auth.getAllInformation)
routers.post('/insertUser', auth.insertUser)

module.exports = routers
