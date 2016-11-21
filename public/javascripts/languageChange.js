window.onload = function() {
    var changeLang = document.getElementById('changeLang')
    var changeLangEle = Array.from(document.querySelectorAll('[data-en]'))
    changeLang.addEventListener('change', function() {
        var lang = this.value
        switch (lang) {
            case "zh":
                for (var i = 0; i < changeLangEle.length; i++) {
                    changeLangEle[i].innerText = changeLangEle[i].dataset.zh
                }
                break
            case "en":
                for (var i = 0; i < changeLangEle.length; i++) {
                    changeLangEle[i].innerText = changeLangEle[i].dataset.en
                }
                break
        }
    })
}
