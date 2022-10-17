const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const Records = require('./models/records')
const port = 3000
const router = require('./routes/')

const app = express()
app.use(express.urlencoded({extended: true}))
mongoose.connect(process.env.MONGODB_URI_shorturl)

app.engine('hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')
app.use(router)

const db = mongoose.connection

db.on('error', () => {
  console.log(`mongodb error!`)
})

db.once('open', () => {
  console.log(`mongodb connected!`)
})


app.listen(port, () => {
  console.log(`location:${port} active`)
})



