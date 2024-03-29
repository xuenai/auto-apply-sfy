const puppeteer = require('puppeteer')
const screenshot = require('./screenshot')
const sanfengyun = require('./sanfengyun')
const schedule = require('node-schedule')
const utils = require('./utils')
const { sleep } = require('./utils')
const statusObj = utils.resolveCheckStatus()
const STATUS = utils.STATUS

schedule.scheduleJob('0 30 11 * * *', task)

function task() {
  if (!utils.isApplyDate()) return
  statusObj.status = STATUS.TOAPPLY
  main()
}

async function main() {
  if (statusObj.status === STATUS.TOAPPLY) {
    const Ticks = [5, 10, 15, 20]
    const index = Math.floor(Math.random() * Ticks.length)
    await utils.sleep(Ticks[index] * 60 * 1000 + Math.random() * 6 * 60 * 1000)
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      // executablePath: "C:\\Users\\sky\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe"
    })
    const page = await browser.newPage()
    page.setViewport({ width: 1920, height: 1080 })
    await screenshot(page)
    try {
      await sanfengyun(page, statusObj)
    } catch(e) {
      console.log(e)
    }
  
    await browser.close()
    return main()
  }
  else if (statusObj.status === STATUS.WAITAUDIT) {
    await sleep(2 * 60 * 60 * 1000)
    statusObj.status = STATUS.TOAPPLY
    return main()
  }
  else if (statusObj.status === STATUS.NOTUNTILL) {
    return
  }
}
