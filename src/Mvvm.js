class Mvvm {
  constructor(opts = {}) {
    this.$opts = opts
    const data = (this._data = this.$opts.data)
    const self = this

    Object.keys(data).forEach(key => {
      self._proxyData(key)
    })

    this._initComputed()
    observe(data, this)
    this.$compile = new Compiler(opts.el || document.body, this)
  }

  $watch(key, cb, opts) {
    new Watcher(this, key, cb)
  }
  _proxyData(key, setter, getter) {
    const self = this
    setter =
      setter ||
      Object.defineProperty(self, key, {
        configurable: false,
        enumerable: true,
        get() {
          return self._data[key]
        },
        set(newVal) {
          self._data[key] = newVal
        }
      })
  }
  _initComputed() {
    const self = this
    const computed = this.$opts.computed
    if (typeof computed === 'object') {
      Object.keys(computed).forEach(key => {
        Object.defineProperty(self, key, {
          get() {
            typeof computed[key] === 'function' ? computed[key] : computed[key].get
          },
          set() {}
        })
      })
    }
  }
}
