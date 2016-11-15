var express = require('express')
var router = express.Router()

//首页
router.get('/', function(req, res, next) {
    res.render('index', {
        title: '唐图文创',
        navbar:{
          index:'首页',
          product:'我们的产品',
          service:'我们的服务',
          about:'关于我们',
          marketing:'营销网络',
          career:'职业发展',
          contact:'联系我们'
        }
    })
});
router.get('/product', function(req, res, next) {})
router.get('/service', function(req, res, next) {})
router.get('/about', function(req, res, next) {})
router.get('/marketing', function(req, res, next) {})
router.get('/career', function(req, res, next) {})
router.get('/contact', function(req, res, next) {})
router.get('/product/:id', function(req, res, next) {

})



module.exports = router
