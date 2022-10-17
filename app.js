const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const Records = require('./models/records')
const port = 3000
const mainUrl = `http://localhost:${port}/`

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


app.get('/short/:reurlCode', (req, res) => {
  const reurlCode = req.params.reurlCode
  Records.findOne({ reurl: reurlCode })
  .lean()
  .then((url) => res.redirect(`${url.baseurl}`)) //返回原網址
  .catch(error => console.log(error))
})


app.post('/short', (req, res) => {
  const newURL = req.body.short
  console.log('get form POST request')
  const notFoundUrl = !newURL

  Records.find({ url: newURL })
  .lean()
  .then( urls => {
    let originUrl =  urls.find(url => url.baseurl === newURL)
    console.log(originUrl)
// 例外處理-重複資料就撈資料
    if(originUrl) {
      reurl = `${mainUrl}short/${originUrl.reurlCode}`
      console.log(`urlaaaa`)
      return res.render('index', { baseurl: newURL, reurl, originUrl })
    }
// 例外處理-沒有輸入資料就提示使用者
    if(!newURL) { 
      return res.render('index', { notFoundUrl })
    } else {
// 新增資料
    const reurlCode = randomNumCreate()
    Records.create({ baseurl: newURL, reurlCode })
      .then(() => {
        console.log(`urlbbbbb`)
        const reurl = `${mainUrl}short/${reurlCode}`
        return res.render('index', { baseurl: newURL, reurl, notFoundUrl })
      })
    }
  })
  .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`location:${port} active`)
})

function randomNumCreate() {
  let randomNum = (Math.random() + 1).toString(36).substring(7)
  return randomNum
}