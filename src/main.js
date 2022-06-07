const puppeteer = require('puppeteer')
const screenshot = require('./screenshot')
const sanfengyun = require('./sanfengyun')
const schedule = require('node-schedule')
const utils = require('./utils')

schedule.scheduleJob('0 30 11 * * *', main)

async function main() {
  if (!utils.isApplyDate()) return
  await utils.sleep(Math.random() * 6 * 60 * 1000)
  const browser = await puppeteer.launch({
    headless: true,
  })
  const page = await browser.newPage()
  page.setViewport({ width: 1920, height: 1080 })
  await screenshot(page)
  await sanfengyun(page)

  await browser.close()
}
