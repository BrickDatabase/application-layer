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
const tokens = require('./helpers/tokens')

const csrfMiddleware= csurf({
  cookie:true
})

console.log(__dirname)
console.log('/Users/friedwaffle/Development/Reddit/service-layer/manual_get_call.py')
app.use(express.static(__dirname+'/build/static'))

app.get('/',(req,res)=>{
    res.send("HELLO WORLD")
  //res.send(__dirname)

      // res.sendFile(path.join(__dirname+'/build/index.html'))
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


// async function build(){

//   const app = fastify({
//     logger:true
//   })

//   await app.register(require('fastify-express'))
  
//   app.use(bodyParser.json())
//   app.use(bodyParser.urlencoded({ extended: true }))
//   app.use(helmet())

//   app.express.disabled('x-powered-by')

//   app.get(`/`, (req, res) => {
//     res.send({ message: `Welcome to the Europa Report!` })
//   })
  
//   app.use(lookups)
//   app.use(infos)

//   return app

// }

// build()
// .then(app=>app.listen(port,()=>{
//   console.log(chalk.green.bold(`App running at https://0.0.0.0:${port}`))
// }))
// .catch(console)