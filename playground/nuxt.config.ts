import { defineNuxtConfig } from 'nuxt'
import Typeform from '..'

export default defineNuxtConfig({
  server: {
    host: '0.0.0.0' // default: localhost
  },
  modules: [
    Typeform
  ],
  typeform: {
    formId: 'BYWHV4'
  }
})
