window.onload = function() {
    const images = Array.from($$('.image-item')),
        control = Array.from($$('.control-item'))
    control.forEach(function(el) {
        let self = el
        el.addEventListener('click', function() {
            clearInterval(timer)
            control.map(function(el) {
                el.className = ''
            })
            self.className += "active"
            let index = self.dataset.index
            for (let i = 0; i < images.length; i++) {
                images[i].childNodes[0].style.opacity = '0'
            }
            images[index].childNodes[0].style.opacity = '1'
        })
    })
    let timer = setInterval(function() {
        let index = Math.floor(Math.random() * control.length)
        for (let i = 0; i < control.length; i++) {
            control[i].className = ''
            images[i].childNodes[0].style.opacity = '0'
        }
        control[index].className += 'active'
        images[index].childNodes[0].style.opacity = '1'
    }, 2000)
}

function $$(el) {
    return document.querySelectorAll(el)
}
