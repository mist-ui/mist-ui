import type { App, Plugin } from 'vue'
import ConfigProvider from './config-provider'
import { useInjectConfigGlobal } from './context'

export {
  configProviderProps,
} from './props'
export type {
  ConfigProviderProps,
} from './props'

export {
  useInjectConfigGlobal,
}

export default {
  install: (app: App) => {
    app.component(ConfigProvider.name ?? 'MConfigProvider', ConfigProvider)
  },
  useInjectConfigGlobal,
} as typeof ConfigProvider & Plugin & {
  useInjectConfigGlobal: typeof useInjectConfigGlobal
}
