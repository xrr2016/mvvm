var express = require('express')
var router = express.Router()

//首页
router.get('/', function(req, res, next) {
    res.render('index', {
        title: '唐图文创',
        navbar:{
          index:'首页',
          products:'我们的产品',
          service:'我们的服务',
          about:'关于我们',
          marketing:'营销网络',
          career:'职业发展',
          contact:'联系我们'
        }
    })
});
// 产品页面
router.get('/products', function(req, res, next) {
  res.render('pages/products',{})
})
// 服务页面
router.get('/service', function(req, res, next) {
  res.render('pages/service',{})
})
// 关于我们
router.get('/about', function(req, res, next) {
  res.render('pages/about',{})
})
// 营销网络
router.get('/marketing', function(req, res, next) {
  res.render('pages/marketing',{})
})
// 职业发展
router.get('/career', function(req, res, next) {
  res.render('pages/career',{})
})
// 联系我们
router.get('/contact', function(req, res, next) {
  res.render('pages/contact',{})
})
// 产品个例
router.get('/products/:id', function(req, res, next) {
  let id = req.params.id

})



module.exports = router
