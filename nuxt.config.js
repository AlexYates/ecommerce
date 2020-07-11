export default {
  
  env: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },

  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxt/http',

  ],

  // https://http.nuxtjs.org/api/#options
  http: {
    // proxyHeaders: false
  },


  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // https://nuxtjs.org/api/configuration-build#cache
    // cache: true,
    // https://nuxtjs.org/api/configuration-build#parallel
    // parallel: true,
    extend(config, context) {
      if (context.isDev && context.isClient) {
        config.module.rules.push({
          enforce: "pre",
          exclude: /(node_modules)/,
          loader: "eslint-loader",
          options: {
            fix: true
          },
          test: /\.(js|vue)$/,
        })
      }
    }
  },

  modern: true,

  serverMiddleware: [
    '~/serverMiddleware/brands',
    '~/serverMiddleware/categories',
    '~/serverMiddleware/colours',
    '~/serverMiddleware/links',
    '~/serverMiddleware/products',
    '~/serverMiddleware/recommendations',
    '~/serverMiddleware/trending',
  ],
}
