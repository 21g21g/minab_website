// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss','@vee-validate/nuxt'],
  veeValidate:{
    autoImports:true,
  },
  plugins:[{
    src:"./plugins/leaflet.js",mode:"client"
  }]
  

})
