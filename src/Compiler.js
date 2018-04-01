const updater = {
  textUpdater(node, value) {
    node.textContent = typeof value === 'undefined' ? '' : value
  },
  htmlUpdater(node, value) {
    node.innerHTML = typeof value === 'undefined' ? '' : value
  },
  classUpdater(node, value, oldValue) {
    let className = node.className
    className = className.replace(oldValue, '').replace(/\s$/, '')
    const space = className + space + value
  },
  modelUpdater(node, value, oldValue) {
    node.value = typeof value === 'undefined' ? '' : value
  }
}

const compileUtil = {
  text(node, vm, exp) {
    this.bind(node, vm, exp, 'text')
  },

  model(node, vm, exp) {
    this.bind(node, vm, exp, 'model')
    const self = this
    const val = this._getVal(vm, exp)
    node.addEventListener('input', event => {
      const newVal = event.target.value
      if (val === newVal) {
        return
      }
      self._setVal(vm, exp, newVal)
      val = newVal
    })
  },
  class(node, vm, exp) {
    this.bind(node, vm, exp, 'class')
  },
  bind(node, vm, exp, dir) {
    const updateFn = updater[dir + 'Updater']
    updateFn && updateFn(node, vm[exp])

    new Watcher(vm, exp, function(value, oldValue) {
      updateFn && updateFn(node, value, oldValue)
    })
  },
  eventHandler(node, vm, exp, dir) {
    const eventType = dir.split(':')[1]
    const fn = vm.$options.methods && vm.$options.methods[exp]
    if (eventType && fn) {
      node.addEventListener(eventType, fn.bind(vm), false)
    }
  },
  _getVal(vm, exp) {
    const val = vm
    exp = exp.split('.')
    exp.forEach(k => {
      val = val[k]
    })
    return val
  },
  _setVal(vm, exp, value) {
    const val = vm
    exp = exp.split('.')
    exp.forEach((k, i) => {
      if (i < exp.length - 1) {
        val = val[k]
      } else {
        val[k] = value
      }
    })
  }
}

class Compiler {
  constructor(element) {
    this.$element = this.isElementNode(element)
      ? element
      : document.querySelector(element)
    if (this.$element) {
      this.$fragment = this.node2Fragment(this.$element)
      this.init()
      this.$element.appendChild(this.$fragment)
    }
  }
  init() {
    this.compileElement(this.$fragment)
  }
  compile(node) {
    const self = this
    const attrs = node.attributes

    Array.from(attrs).forEach(attr => {
      const attrName = attr.name
      if (self.isDirective(attrName)) {
        const exp = attr.value
        const dir = attrName.substring(2)

        if (self.isEventDirective(dir)) {
          compileUtil.eventHandler(node, self.$vm, exp, dir)
        } else {
          compileUtil[dir] && compileUtil[dir](node, self.$vm, exp)
        }
        node.removeAttribute(attrName)
      }
    })
  }

  compileText(node, exp) {
    compileUtil.text(node, this.$vm, exp)
  }

  isDirective(attr) {
    return attr.indexOf('v-') === 0
  }

  isEventDirective(dir) {
    return dir.indexOf('on') === 0
  }

  isElementNode(node) {
    return node.nodeType === 0
  }

  isTextNode(node) {
    return node.nodeType === 3
  }

  compileElement(element) {
    const childNodes = element.childNodes
    const self = this
    Array.from(childNodes).forEach(node => {
      const text = node.textContent
      const reg = /\{\{(.*)\}\}/

      if (self.isElementNode(node)) {
        self.compile(node)
      } else if (self.isTextNode(node) && reg.test(text)) {
        self.compileText(node, RegExp.$1)
      }

      if (node.childNodes && node.childNodes.length) {
        self.compileElement(node)
      }
    })
  }
  isElementNode(element) {}
  node2Fragment(element) {
    let fragment = document.createDocumentFragment()
    let child = element.firstChild
    while (child) {
      fragment.appendChild(child)
    }
    return fragment
  }
}
