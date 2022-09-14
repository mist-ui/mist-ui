import type { CSSProperties } from 'vue'
import { computed, defineComponent } from 'vue'
import { classMerge } from '../_utils/tools/class-merge'
import { useInjectConfigGlobal } from '../config-provider'
import { overlayProps } from './props'
export default defineComponent({
  name: 'MOverlay',
  inheritAttrs: false,
  props: {
    ...overlayProps,
  },
  setup(props, { slots, attrs }) {
    const { getPrefixCls } = useInjectConfigGlobal()
    const overlayPrefix = getPrefixCls('overlay')
    const classs = computed(() => classMerge(
      overlayPrefix, {

      }, attrs.class))
    return () => {
      if (!props.mark)
        return slots.default?.()
      return (
        <div
          class={classs.value}
          style={attrs.style as CSSProperties}
        >
          { slots.default?.() }
        </div>
      )
    }
  },
})
