window.onload = function() {
    const images = Array.from($$('.image-item')),
        control = Array.from($$('.control-item'))
    control.forEach(function(el) {
        let self = el
        el.addEventListener('click', function() {
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
    
}

function $$(el) {
    return document.querySelectorAll(el)
}
