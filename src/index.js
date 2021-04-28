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
const cors = require('cors')
const tokens = require('./helpers/tokens')

app.use(express.static(__dirname+'/build/static'))

var options = {
  origin: 'http://localhost:3000'
}

app.use(cors(options))

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

module.exports = app
