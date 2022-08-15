import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addComponentsDir, addPlugin } from '@nuxt/kit'

import { name, version } from '../package.json'

export interface ModuleOptions {
  formId: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'typeform',
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.0.0'
    }
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

    nuxt.options.css.push('@typeform/embed/build/css/popup.css')

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

    nuxt.hook('ready', async nuxt => {
      console.log('Nuxt is ready')
    })
  }
})
