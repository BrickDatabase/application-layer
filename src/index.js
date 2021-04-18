const express = require('express')
const app = express()
// const fastify = require('fastify')
const bodyParser = require("body-parser")
const lookups = require('./routes/lookup.route')
const infos = require('./routes/info.route')
const auths = require('./routes/auth.route')
const port = process.env.PORT || 5000
const chalk = require('chalk')
// const helmet = require('helmet')
const path = require('path')
const helmet = require('helmet')
const csurf = require('csurf')
const cookieParser = require('cookie-parser')
const {PythonShell} = require('python-shell')
const tokens = require('./helpers/tokens')


console.log('/Users/friedwaffle/Development/Reddit/test.py')
app.use(express.static(__dirname+'/build/static'))

PythonShell.run(__dirname+'/services/get_call.py',options,(err,res)=>{
  if (err){
    console.log(err)
  }
  console.log(res)
})

app.get('/',(req,res)=>{

      res.sendFile(path.join(__dirname+'/build/index.html'))
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(lookups)
app.use(infos)
app.use(auths)

// localhost:5000
app.listen(port, () => {
  console.log(chalk.green.bold(`App running at https://brick-subreddit.herokuapp.com`))
})
