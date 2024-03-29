const config = require('./config')
const { sleep, STATUS } = require('./utils')

module.exports = async (page, statusObj) => {
  await page.goto(config.sanfengyunUrl)
  const nameInput = await page.$('#userName')
  await nameInput.focus()
  await page.keyboard.type(config.account)

  const pwdInput = await page.$('#passwordInput')
  await pwdInput.focus()
  await page.keyboard.type(config.pwd)

  const searchBtn = await page.$('#loginSubmit')
  await searchBtn.click()

  await sleep(5000)
  const [kztBtn] = await page.$x('//a[text()="控制台"]')
  if (kztBtn) await kztBtn.click()

  await sleep(5000)
  const [productionBtn] = await page.$x('//a[text()="产品"]')
  await productionBtn.click()
  await page.waitForSelector('.navbar-collapse')
  const freeECSBtn = await page.$(
    '.navbar-collapse .menu-items .menu-item:nth-child(2)'
  )
  await freeECSBtn.click()
  await page.waitForSelector('.freevps-table')
  const [freeBtn] = await page.$x('//span[text()="免费延期"]')
  await freeBtn.click()
  await sleep(2000)
  // 审核中直接推出
  const [willtip] = await page.$x('//p[text()="您还未到需要提交延期的时间"]')
  if (willtip) {
    statusObj.status = STATUS.NOTUNTILL
    return
  }
  // 审核中直接推出
  const [tip] = await page.$x('//p[text()="延期申请等待审核中"]')
  if (tip) {
    statusObj.status = STATUS.WAITAUDIT
    return
  }
  // 重新提交
  const [resubmit] = await page.$x('//span[text()="重新提交"]')
  if (resubmit) {
    await resubmit.click()
  }
  await sleep(300)
  const urlInput = await page.waitForSelector('#pane-seven .el-input__inner')
  await urlInput.focus()
  await page.keyboard.type(config.zhihuUrl)
  const uploadPic = await page.waitForSelector('input#fileImg1')
  //上传图片目录自定义
  await uploadPic.uploadFile(config.shotImgName)
  await sleep(500)
  const [submitBtn] = await page.$x('//span[text()="提交"]')
  await submitBtn.click()
  await page.waitFor(3000)
  await page.screenshot({
    path: '22.png',
  })
}
