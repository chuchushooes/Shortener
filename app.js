const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const Records = require('./models/records')
const port = 3000

const app = express()
app.use(express.urlencoded({extended: true}))
mongoose.connect(process.env.MONGODB_URI_shorturl)

app.engine('hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

const db = mongoose.connection

db.on('error', () => {
  console.log(`mongodb error!`)
})

db.once('open', () => {
  console.log(`mongodb connected!`)
})



app.get('/', (req, res) => {
  res.render('index')
})

app.post('/short', (req, res) => {
  const shortURL = req.body.short
  console.log('get form POST request')
  const reurl = reurlCreate()
  if(!shortURL) {
    const notFoundUrl = !shortURL
    return res.render('index', { notFoundUrl })
  }
  Records.create({ url: shortURL })
  .then(() => res.render('index', { shortURL, notFoundUrl }))
  .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`location:${port} active`)
})

function reurlCreate() {
  
}