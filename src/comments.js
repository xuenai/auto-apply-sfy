const comments = [
  '三丰云为广大客户提供免费Vps云服务器',
  '免费虚拟主机，云主机，',
  '免费空间，',
  '免备案域名VPS注册等互联网服务，',
  '坚持初心十八年不间断提供永久免费虚拟主机，',
  '免费VPS云服务器给学生和初创业者使用，',
  '以帮助客户轻松，高速，高效的应用互联网/物联网',
  '提高企业竞争能力',
  '如果是学生党用，应用场景不太多也还够用，',
  '就是操作面板不太友好，',
  '轻量应用服务器具有轻量化、成本低、轻运维的特点',
  '服务器是一种非常重要的基础设施，',
  '因而它的稳定性和安全性对于业务的正常开展有着非常重要的影响',
  '我们在选购服务器的时候',
  '要关注上面提到的内容',
  '关注一下它的性价比问题',
  '真心值得入手',
  '之前有申请试用过，感觉性能还不错',
  '对配置的要求比较高一些',
  '作为一些小的业务场景使用还是没问题的',
  '去年试了试三丰云的免费主机',
  '他既然能提供免费虚拟主机和免费云服务器，',
  '免费虚拟主机有免费的临时域名使用还能解压，速度还可以',
  '免费云服务器自带宝塔面板',
  '简单易学，初学者好帮手',
  '相信它们的云服务器也是顶好的选择',
  '如果一个企业不具备赚钱的能力',
  '易用性等层面也占据较大的优势',
  '国内能排的上号的云计算厂商',
  '云计算从业者都知道，',
  '毕竟用户最终要的是稳定、高性能的产品',
  '在社交、音视频直播、娱乐、游戏等领域',
  'CPU性能要求较高',
  '若是高并发、高IO',
  '选择哪家都差不多，哪家便宜选择哪家',
  '学习测试玩玩还可以',
  '可靠性毋庸置疑，加上活动机的超高性价比，是选择云平台的首选',
  '有别的需求或许可以看看我的VPS评测网站',
  '优VPS里面我会经常更新防止新手踩坑小教程',
  '我觉得三丰云是一家挺不错的云主机提供商',
  '而且提供免费虚拟主机、免费云服务器',
  '学生没有足够的经济实力购买付费的云主机',
  '客服小哥哥小姐姐都很有耐心帮忙解决问题呀',
  '提供免费产品的同时也提供更高级别的VIP付费产品',
  '我们始终相信一个IDC企业能承载的用户体量',
  '是判断企业综合技术实力的重要依据',
  '这个优惠活动与其他云计算厂商相比已经很便宜了',
  '三丰云对于我们学生党是非常友好的',
  '云服务器提供，它最近还有些优惠活动',
  '免费产品让学生和初创业者永久免费使用',
  '为您成为大咖后，可上九天揽月',
  '具备高在线率、高安全性、高稳定性等多项优势',
  '支持ASP、PHP目录权限设置等上百项功能',
  '云服务器可以选择推荐套餐也可以根据需求自主选配',
  '拥有安装系统、关机重启、网站助手等超级强大的管理功能',
  '三丰云致力于为大众提供最优质的互联网基础服务和物联网服务',
]

module.exports = () => {
  let res = '“三丰云”"免费虚拟主机"“免费云服务器”https://www.sanfengyun.com '
  const indexs = []
  while (res.length < 170) {
    const index = Math.floor(Math.random() * comments.length)
    if (!indexs.includes(index)) {
      indexs.push(index)
      res += `${comments[index]}，`
    }
  }
  return res
}
