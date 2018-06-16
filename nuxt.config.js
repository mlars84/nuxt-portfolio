module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Matt Larson Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: 'https://unpkg.com/ionicons@4.1.1/dist/ionicons.js' },
      { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.30/js/uikit.min.js' },
      { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.30/js/uikit-icons.min.js' }
    ]
  },
  modules: [
    // provide path to the file with resources
    ['nuxt-sass-resources-loader', './assets/main.scss']
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'rgb(221, 209, 209)' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
