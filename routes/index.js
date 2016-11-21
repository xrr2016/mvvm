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
    cup: {
        name: '唐图水杯',
        route: 'products/cup',
        src: '/images/products/cup.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    },
    light: {
        name: '唐图台灯',
        route: 'products/light',
        src: '/images/products/light.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    },
    tape: {
        name: '唐图胶带',
        route: 'products/tape',
        src: '/images/products/tape.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    }
}

const intel = {
    item01: {
        name: '唐图台灯',
        route: 'products/light',
        src: '/images/products/light.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    },
    item02: {
        name: '唐图水杯',
        route: 'products/cup',
        src: '/images/products/cup.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    },
    item03: {
        name: '唐图胶带',
        route: 'products/tape',
        src: '/images/products/tape.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    },
    item04: {
        name: '唐图水晶球',
        route: 'products/ball',
        src: '/images/products/ball.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    },
    item05: {
        name: '唐图水杯',
        route: 'products/cup',
        src: '/images/products/cup.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    },
    item06: {
        name: '唐图台灯',
        route: 'products/light',
        src: '/images/products/light.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    },
    item07: {
        name: '唐图胶带',
        route: 'products/tape',
        src: '/images/products/tape.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    },
    item08: {
        name: '唐图水晶球',
        route: 'products/ball',
        src: '/images/products/ball.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    }
}
const daily = {
    name: '唐图水杯',
    route: 'products/cup',
    src: '/images/products/cup.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
}
const gift = {
    cup: {
        name: '唐图水杯',
        route: 'products/cup',
        src: '/images/products/cup.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    },
    light: {
        name: '唐图台灯',
        route: 'products/light',
        src: '/images/products/light.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    },
    tape: {
        name: '唐图胶带',
        route: 'products/tape',
        src: '/images/products/tape.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    },
    ball: {
        name: '唐图水晶球',
        route: 'products/ball',
        src: '/images/products/ball.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    }
}

router.get('/', function(req, res, next) {
        res.render('index', {
            navbar: navbar,
            isIndex: true,
            logo: false
        })
    })
    // 产品页面
router.get('/products', function(req, res, next) {
        res.render('pages/products', {
            navbar: navbar,
            daily: daily,
            intel: intel,
            logo: true,
            gift: gift
        })
    })
    // 服务页面
router.get('/service', function(req, res, next) {
        res.render('pages/service', {
            products: products,
            navbar: navbar,
            logo: true
        })
    })
    // 关于我们
router.get('/about', function(req, res, next) {
        res.render('pages/about', {
            navbar: navbar,
            isAbout: true,
            logo: true
        })
    })
    // 营销网络
router.get('/marketing', function(req, res, next) {
        res.render('pages/marketing', {
            navbar: navbar,
            logo: true
        })
    })
    // 职业发展
router.get('/career', function(req, res, next) {
        res.render('pages/contact', {
            navbar: navbar,
            logo: true
        })
    })
    // 联系我们
router.get('/contact', function(req, res, next) {
        res.render('pages/contact', {
            navbar: navbar,
            logo: true
        })
    })
    // 产品个例

const cup = {
      name: '唐图水杯',
      route: 'products/cup',
      src: '/images/products/cup.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    }
const light = {
      name: '唐图台灯',
      route: 'products/light',
      src: '/images/products/light.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    }
const tape = {
      name: '唐图胶带',
      route: 'products/tape',
      src: '/images/products/tape.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    }
const ball = {
      name: '唐图水晶球',
      route: 'products/ball',
      src: '/images/products/ball.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor occaecat cia deserunt mollit anim id est laborum.'
    }
    //首页
router.get('/products/:id', function(req, res, next) {
    let id = req.params.id
    switch (id) {
        case 'cup':
            res.render('pages/product', {
                navbar: navbar,
                color:'#5b7e91',
                logo: true,
                cup: cup
            })
            break
        case 'light':
            res.render('pages/product', {
                navbar: navbar,
                color:"#474a4d",
                light:light,
                logo: true
            })
            break
        case 'tape':
            res.render('pages/product', {
                navbar: navbar,
                color:"#afafb0",
                logo: true,
                tape:tape
            })
            break
        case 'ball':
            res.render('pages/product', {
                navbar: navbar,
                color:"#fce2c4",
                logo: true,
                ball:ball
            })
            break
    }
})

module.exports = router
