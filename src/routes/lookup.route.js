
const lookup = require('../controllers/lookup.controller')

const routers = require('express').Router()

routers
.post('/lookup',lookup.create)
.get('/lookups',lookup.getAll)
.get('/lookup',lookup.getOne)
.put('/lookup',lookup.update)
.delete('/lookup',lookup.delete)
.delete('/lookups',lookup.deleteAll)
    
module.exports = routers