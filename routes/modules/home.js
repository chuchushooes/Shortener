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


// 瀏覽器導向原本的網站，輸入錯誤短網址會告訴使用者error
router.get('/short/:reurlCode', (req, res) => {
  let reurlCode = req.params.reurlCode
  Records.findOne({ reurlCode })
  .lean()
  .then(url => res.redirect(url.baseurl))
  .catch(error => res.render('error', { errorLink: mainUrl + 'short/' + reurlCode }))
})



router.post('/short', (req, res) => {
  const newURL = req.body.short
  console.log(req.body)
  let notFoundUrl = !newURL

  //例外處理-沒有輸入資料就提示使用者
  if(!newURL) { 
    return res.render('index', { notFoundUrl })
  }

  Records.find({ url: newURL })
  .lean()
  .then( urls => {
    let originUrl =  urls.find(url => url.baseurl === newURL)
  //例外處理-重複資料就撈資料
    if(originUrl) {
    const reurl = `${mainUrl}short/${originUrl.reurlCode}`
    return res.render('index', { baseurl: newURL, reurl, originUrl })
    } else {
  //新增資料
    const reurlCode = randomNumCreate(5)
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