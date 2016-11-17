(function() {
    let button = document.body.appendChild(document.createElement('div'))
        button.style.width =60 + 'px'
        button.style.height = 30 + 'px'
        button.style.lineHeight = 40 + 'px'
        button.innerHTML = '<i class="fa fa-angle-double-up fa-4x" style="color:#999;" aria-hidden="true"></i>'
        button.style.position = 'fixed'
        button.style.display = 'none'
        button.style.textAlign = 'center'
        button.style.cursor = 'pointer'

    button.addEventListener('click',function(){
      let timer = setInterval(function(){
        document.body.scrollTop -= 10
        document.documentElement.scrollTop -= 10
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        if(scrollTop <= 0){
          clearInterval(timer)
        }
      },1)
    })

    window.addEventListener('scroll', function() {
        const lang = 1200
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        if (scrollTop >= lang) {
          button.style.display = 'block'
          button.style.bottom =  60 +'px'
          button.style.right = 40 + 'px'
        } else {
          button.style.display = 'none'
        }
    })

})()
