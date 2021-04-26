const info = require('../controllers/info.controller')

const routers = require('express').Router()

routers
.post('/info',info.create)
.get('/info', info.getOne)
.put('/info', info.update)
.delete('/info', info.delete)
.get('/infos', info.getAll)
.delete('/infos', info.deleteAll)

module.exports = routers