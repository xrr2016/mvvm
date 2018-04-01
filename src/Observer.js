let uid = 0

function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return
  }
  return new Observer(value)
}

class Dep {
  constructor() {
    this.id = uid++
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  depend() {
    Dep.target.addDep(this)
  }
  removeSub(sub) {
    const index = this.subs.findIndex(s => s === sub)
    this.subs.splice(index, 1)
  }
  notify() {
    this.subs.forEach(sub => sub.update())
  }
}

Dep.target = null

class Observer {
  constructor(data) {
    this.data = data
    this.walk(data)
  }

  walk(data) {
    const self = this
    Object.keys(data).forEach(key => {
      self.convert(key, data[key])
    })
  }

  convert(key, val) {
    this.defineReactive(this.data, key, val)
  }

  defineReactive(data, key, val) {
    const dep = new Dep()
    const childObj = observe(val)

    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: false,
      get() {
        if (Dep.target) {
          dep.depend()
        }
        return val
      },
      set(newVal) {
        if (val === newVal) {
          return
        }
        console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal)
        val = newVal
        childObj = observe(newVal)
        dep.notify()
      }
    })
  }
}
