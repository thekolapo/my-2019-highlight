
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Kolapo Oni - Year In Review (2019)',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'keywords',
        content: 'Kolapo Oni, Kolapo, Oni, kolapo year in review'
      },
      {
        property: 'og:title',
        content: 'Kolapo Oni - Year In Review (2019)'
      },
      {
        property: 'og:url',
        content: 'https://2019.thekolapo.com'
      },
      {
        property: 'og:image',
        content: 'https://res.cloudinary.com/daitiebum/image/upload/v1578150660/kolapo_2019_highlight.png'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Highlights and Happenings of 2019'
      }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js' },
      { src: 'https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
        integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/sass/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
