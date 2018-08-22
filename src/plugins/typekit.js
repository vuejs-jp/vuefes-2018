(function (d) {
  let config = {
    kitId: 'qns1qjx',
    scriptTimeout: 3000,
    async: true,
  }

  let h = d.documentElement

  let t = setTimeout(function () {
    h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive'
  }, config.scriptTimeout)

  let tk = d.createElement('script')
  let f = false
  let s = d.getElementsByTagName('script')[0]
  let a

  h.className += ' wf-loading'
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js'
  tk.async = true

  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState

    if (f || (a && (a !== 'complete') && (a !== 'loaded'))) {
      return
    }

    f = true
    clearTimeout(t)

    try {
      window.Typekit.load(config)
    } catch (e) {
    }
  }

  s.parentNode.insertBefore(tk, s)
})(document)
