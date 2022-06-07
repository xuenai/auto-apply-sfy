const config = require('./config')
const moment = require('moment')

module.exports = {
  sleep(num) {
    return new Promise((r) => setTimeout(r, num))
  },
  isApplyDate() {
    const date = moment(Date.now()).format('YYYY-MM-DD')
    const endTime = new Date(date).getTime()
    const startTime = new Date(config.applyTime).getTime()
    // 每5天申请一次
    return (endTime - startTime) % (5 * 24 * 60 * 60 * 1000) === 0
  },
}
