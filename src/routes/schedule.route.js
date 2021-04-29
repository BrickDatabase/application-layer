const schedule = require('../controllers/schedule.controller')

const routers = require('express').Router()

routers
.get('/schedule', schedule.getSchedule)
.get('/schedules',schedule.getAll)
.get('/scheduleld',schedule.getLastDay)
.get('/scheduleds',schedule.getDays)

module.exports = routers