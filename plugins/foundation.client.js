import { defineNuxtPlugin } from '#app'
import jQuery from 'jquery'
import { Foundation } from 'foundation-sites'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    window.$ = window.jQuery = jQuery
    
    Foundation.addToJquery(jQuery)
    
    nuxtApp.vueApp.config.globalProperties.$foundation = Foundation
    
    nuxtApp.hook('app:mounted', () => {
      jQuery(document).foundation()
    })
    
    return {
      provide: {
        foundation: Foundation
      }
    }
  }
})