function addOverlay (el, done) {
  let overlayElt = document.getElementById('overlayDiv')
  overlayElt.classList.add('up')
  window.setTimeout(() => {
    overlayElt.classList.remove('up')
    done()
  }, 300)
}

function removeOverlay (el, done) {
  let overlayElt = document.getElementById('overlayDiv')
  window.setTimeout(() => {
    overlayElt.classList.remove('up')
    done()
  }, 700)
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'La Commuz\'',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Commédie musicale étudiante commune à l\'École Centrale de Lyon et à l\'emlyon business school' },
      { name: 'theme-color', content: '#fe7a90' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/variables.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#fe7a90' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor:
    [ 'animejs' ]
  },
  css: [
    '@/assets/css/global.scss'
  ],
  transition: {
    mode: 'out-in',
    name: 'router-overlay',
    leave: addOverlay,
    enter: removeOverlay
  },
  router: {
    middleware: [ 'redirect_equipe', 'redirect_galerie', 'redirect_conchiage' ]
  }
}
