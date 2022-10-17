const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000
const routes = require('./routes')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.engine('hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')
app.use(routes)

require('./config/mongoose')

app.listen(port, () => {
  console.log(`location:${port} active`)
})



