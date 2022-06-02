const config = require('./config')
const getComment = require('./comments')

module.exports = async (page) => {
  await page.goto(config.commentUrl);
  const commentHandle = await page.$('#sanfengyun-comment');
  const comment = getComment()
  await page.evaluate((commentHandle, comment) => {
    commentHandle.innerHTML = comment
  }, commentHandle, comment);
  await commentHandle.dispose();
  await page.screenshot({
    path: config.shotImgName,
    clip: {
      x: 458,
      y: 590,
      width: 718,
      height: 188,
    },
  });
}