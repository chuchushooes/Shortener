/* bad solution 只能產生小寫,且非真正隨機對資料庫有安全性
function randomNumCreate() {
  let randomNum = (Math.random()).toString(36).substring(2,7)
  return randomNum
}
*/
function randomNumCreate(randomTimes) {
  let randomChart = ''
  const chart = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const chartArr = chart.split('')
  for(let i = 0; i < randomTimes; i++) {
    randomChart += chartArr[Math.floor(Math.random()* (chartArr.length - 1))]
  }
  return randomChart
}

module.exports = randomNumCreate