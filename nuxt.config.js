export default {
  ssr: false,
  target: 'static',

  head: {
    meta: [
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: 'Fastkart' },
      { name: 'keywords', content: 'Fastkart' },
      { name: 'author', content: 'Fastkart' },
      //{ rel: 'manifest', href: './manifest.json' },
      { name: 'theme-color', content: '#0baf9a' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'Fastkart' },
      { name: 'msapplication-TileImage', content: 'assets/images/favicon.png' },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    ],
    link: [
      { rel: 'icon', href: 'assets/images/favicon.png', type: 'image/x-icon' },
      { rel: 'apple-touch-icon', href: 'assets/images/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'stylesheet',
        id: 'rtl-link',
        type: 'text/css',
        href: 'assets/css/vendors/bootstrap.css'
      },
      { rel: 'stylesheet', type: 'text/css', href: 'assets/css/iconly.css' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'assets/css/vendors/slick.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'assets/css/vendors/slick-theme.css'
      },
      {
        rel: 'stylesheet',
        id: 'change-link',
        type: 'text/css',
        href: 'assets/css/style.css'
      },
    ],

  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  axios: {
    baseURL: 'http://172.29.138.250:3000',
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {
    publicPath: '/nuxt/',
    hotMiddleware: {
      client: {
        autoConnect: true,
      },
    },
    extend(config, ctx) {},
  },
  server: {
    port: 1090,
    host: '0.0.0.0',
    timing: true,
  },
}
