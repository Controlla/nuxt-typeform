import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addComponentsDir } from '@nuxt/kit'

export interface ModuleOptions {
  formId: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@controlla/nuxt-typeform',
    configKey: 'typeform'
  },
  defaults: {
    formId: ''
  },
  async setup (options, nuxt) {
    if (!options.formId) {
      await nuxt.close()
      throw new Error('You must provide a formId')
    }
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    nuxt.options.runtimeConfig.public.typeform = {
      formId: options.formId
    }

    addComponentsDir({
      path: resolve(runtimeDir, 'components'),
      pathPrefix: false,
      prefix: '',
      level: 999,
      global: true
    })

    addPlugin(resolve(runtimeDir, 'plugin'))
  }
})
