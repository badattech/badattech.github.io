const { description } = require('../../package')

module.exports = {
  title: 'Alterforia',
  description: description,
  head: [
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/tachyons@4/css/tachyons.min.css' }]
  ],

  themeConfig: {

  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-66011663-2'
      }
    ]
  ]
}
