const express = require('express')
const router = express.Router()

const navbar = {
    index: '首页',
    products: '我们的产品',
    service: '我们的服务',
    about: '关于我们',
    marketing: '营销网络',
    career: '职业发展',
    contact: '联系我们'
}

const products = {
  item01:{src : '/images/service/cup.png',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'},
  item02:{src : '/images/service/light.png',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'},
  item03:{src : '/images/service/tape.png',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'},
}

//首页
router.get('/', function(req, res, next) {
        res.render('index', {
            navbar: navbar,
            isIndex:true,
            logo:false
        })
    })
    // 产品页面
router.get('/products', function(req, res, next) {
        res.render('pages/products', {
            navbar: navbar,
            logo:true
        })
    })
    // 服务页面
router.get('/service', function(req, res, next) {
        res.render('pages/service', {
            navbar: navbar,
            products:products,
            logo:true
        })
    })
    // 关于我们
router.get('/about', function(req, res, next) {
        res.render('pages/about', {
            navbar: navbar,
            isAbout:true,
            logo:true
        })
    })
    // 营销网络
router.get('/marketing', function(req, res, next) {
        res.render('pages/marketing', {
            navbar: navbar,
            logo:true
        })
    })
    // 职业发展
router.get('/career', function(req, res, next) {
        res.render('pages/contact', {
            navbar: navbar,
            logo:true
        })
    })
    // 联系我们
router.get('/contact', function(req, res, next) {
        res.render('pages/contact', {
            navbar: navbar,
            logo:true
        })
    })
    // 产品个例
router.get('/products/:id', function(req, res, next) {
    let id = req.params.id
    res.render('product', {
        navbar: navbar,
        logo:true
    })
})



module.exports = router
