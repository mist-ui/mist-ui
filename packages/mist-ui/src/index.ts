import type { App, Plugin } from 'vue'
import { version } from './version'
import * as components from './components'
export * from './locales'
export * from './components'

export default {
  version,
  install: (app: App) => {
    for (const componentsKey in components) {
      // @ts-expect-error this is error component
      const component = components[componentsKey]
      if ('install' in component)
        app.use(component as Plugin)
    }
  },
} as Plugin &{ version: string }
