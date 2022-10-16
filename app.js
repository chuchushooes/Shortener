const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const port = 3000

const app = express()
app.use(express.urlencoded({extended: true}))


app.engine('hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')



app.get('/', (req, res) => {
  res.render('index')
})

app.post('/short', (req,res) => {
  const shortURL = req.body.short
  console.log('get form POST request')
  const notFoundUrl = !shortURL
  res.render('index', {shortURL, notFoundUrl})
})

app.listen(port, () => {
  console.log(`location:${port} active`)
})