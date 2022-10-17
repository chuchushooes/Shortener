//main routes
const express = require('express')
const router = express.Router()
const Records = require('../../models/records')
const randomNumCreate = require('../../utilities/randomNumCreate')
const port = 3000
const mainUrl = `http://localhost:${port}/`

router.get('/', (req, res) => {
  res.render('index')
})


// 瀏覽器導向原本的網站
router.get('/short/:reurlCode', (req, res) => {
  let reurlCode = req.params.reurlCode
  Records.findOne({ reurlCode })
  .lean()
  .then(url => res.redirect(url.baseurl))
  .catch(error => console.log(error))
})

//新增資料
router.post('/short', (req, res) => {
  const newURL = req.body.short
  let notFoundUrl = !newURL

  Records.find({ url: newURL })
  .lean()
  .then( urls => {
    let originUrl =  urls.find(url => url.baseurl === newURL)
//例外處理-重複資料就撈資料
    if(originUrl) {
    reurl = `${mainUrl}short/${originUrl.reurlCode}`
    return res.render('index', { baseurl: newURL, reurl, originUrl })
    }
//例外處理-沒有輸入資料就提示使用者
    if(!newURL) { 
      return res.render('index', { notFoundUrl })
    } else {
//新增資料
    const reurlCode = randomNumCreate()
    Records.create({ baseurl: newURL, reurlCode })
    .then(() => {
      const reurl = `${mainUrl}short/${reurlCode}`
      return res.render('index', { baseurl: newURL, reurl, notFoundUrl })
    })
    }
  })
  .catch(error => console.log(error))
})


module.exports = router