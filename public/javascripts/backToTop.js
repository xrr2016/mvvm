(function() {
    var button = document.body.appendChild(document.createElement('div'))
    button.style.width = 60 + 'px'
    button.style.height = 30 + 'px'
    button.style.lineHeight = 40 + 'px'
    button.innerHTML = '<i class="fa fa-angle-double-up fa-4x" style="color:#999;" aria-hidden="true"></i>'
    button.style.position = 'fixed'
    button.style.display = 'none'
    button.style.textAlign = 'center'
    button.style.cursor = 'pointer'

    button.addEventListener('click', function() {
        var timer = setInterval(function() {
            document.body.scrollTop -= 10
            document.documentElement.scrollTop -= 10
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            if (scrollTop <= 0) {
                clearInterval(timer)
            }
        }, 1)
    })

    window.addEventListener('scroll', function() {
            var lang = 1200
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            if (scrollTop >= lang) {
                button.style.display = 'block'
                button.style.bottom = 60 + 'px'
                button.style.right = 40 + 'px'
            } else {
                button.style.display = 'none'
            }
        })
        //navbar
    var pathnames = ["/", "/products", "/service", "/about", "/marketing", "/career", "/contact"]
    var navbar = Array.from(document.querySelectorAll('.navbar a')).slice(0, 7)
    var curPathname = window.location.pathname
    for(var i = 0;i < navbar.length;i++){
      navbar[i].id = null
      if(curPathname === pathnames[i]){
        var index = i
        navbar[index].id = 'navbar-active'
        break
      }
    }
})()
