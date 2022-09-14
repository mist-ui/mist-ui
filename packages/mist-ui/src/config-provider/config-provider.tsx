import { defineComponent } from 'vue'
import { configProviderProps } from './props'
import { useProvideConfigGlobal } from './context'

export default defineComponent({
  name: 'MConfigProvider',
  inheritAttrs: false,
  props: configProviderProps,
  setup(props, { slots }) {
    useProvideConfigGlobal(props)
    return () => slots.default?.()
  },
})
