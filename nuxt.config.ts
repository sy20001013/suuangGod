// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules: [ '@ant-design-vue/nuxt' ],
  plugins: ['/plugins/antd-ui.js'],
  // antd:{
  //   // Options
  // },
  css: ['~/assets/css/normalize.css']
})
