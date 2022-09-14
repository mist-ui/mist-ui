import type { ComputedRef } from 'vue'
import { computed, inject, provide } from 'vue'
import { get, merge } from '@mistjs/lodash'
import { zhCN } from '../locales'
import type { ConfigProviderProps } from './props'

export interface UseProvideConfigGlobal {
  configProvider: ComputedRef<ConfigProviderProps>
  getPrefixCls: (name: string) => string
  getLocale: (key: string) => string | undefined
}

export const globalConfigProvider: UseProvideConfigGlobal = {
  configProvider: computed(() => ({})),
  getPrefixCls: (name: string) => {
    return `mist-${name}`
  },
  getLocale: key => key,
}
export const provideConfigContextKey = '__ProvideConfigContext__'

export const useProvideConfigGlobal = (props: ConfigProviderProps): void => {
  const configProvider = computed(() => props)
  const getPrefixCls = (name: string) => {
    const prefixCls = configProvider.value.prefixCls || 'mist'
    return `${prefixCls}-${name}`
  }
  const locales = computed(() => configProvider.value.locale || zhCN)
  const getLocale = (key: string): string => {
    return get(locales.value, key)
  }
  merge(globalConfigProvider, {
    configProvider,
    getPrefixCls,
    getLocale,
  })
  provide(provideConfigContextKey, {
    configProvider,
    getPrefixCls,
    getLocale,
  })
}

export const useInjectConfigGlobal = (): UseProvideConfigGlobal => {
  return inject<UseProvideConfigGlobal>(provideConfigContextKey, globalConfigProvider)
}
