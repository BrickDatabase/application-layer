const express = require('express')
const app = express()
// const fastify = require('fastify')
const bodyParser = require("body-parser")
const lookups = require('./routes/lookup.route')
const infos = require('./routes/info.route')
const port = process.env.PORT || 5000
const chalk = require('chalk')
// const helmet = require('helmet')
const helmet = require('helmet')
const csurf = require('csurf')
const cookieParser = require('cookie-parser')
const tokens = require('./helpers/tokens')

const csrfMiddleware= csurf({
  cookie:true
})



async function build(){

  const app = fastify({
    logger:true
  })

  await app.register(require('fastify-express'))
  
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(helmet())

  app.express.disabled('x-powered-by')

  app.get(`/`, (req, res) => {
    res.send({ message: `Welcome to the Europa Report!` })
  })
  
  app.use(lookups)
  app.use(infos)

  return app

}

build()
.then(app=>app.listen(port,()=>{
  console.log(chalk.green.bold(`App running at https://0.0.0.0:${port}`))
}))
.catch(console)