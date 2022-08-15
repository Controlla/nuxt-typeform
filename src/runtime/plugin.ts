import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { createPopup } from '@typeform/embed'

export default defineNuxtPlugin((nuxtApp) => {
  const { formId } = useRuntimeConfig().typeform

  const popup = createPopup(formId)

  nuxtApp.provide('typeform', { popup })
})
