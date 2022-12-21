import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, createResolver, isNuxt2 } from '@nuxt/kit'


export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
    compatibility: {
      nuxt: '^2.0.0 || ^3.0.0'
    }
  },
  setup (_, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    if (isNuxt2()) {
      addPlugin(resolve(runtimeDir, 'plugin.vue2'));
    } else {
      addPlugin(resolve(runtimeDir, 'plugin.vue3'));
    }
  }
})
