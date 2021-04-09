const passport = require('passport')

module.exports = {

    login:(passport.authenticate('local',{
        successRedirect:'/',
        failureRedirect:'/login',
        failureFlash:'Invalid username or password.'
    })),

    
}