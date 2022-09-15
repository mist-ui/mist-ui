import { computed, defineComponent } from 'vue'
import { classMerge } from '../_utils/tools/class-merge'
import { useInjectConfigGlobal } from '../config-provider'
import { overlayProps } from './props'
import { styleMerge } from './../_utils/tools/style-merge'
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

    const styles = computed(() => styleMerge(attrs.style, {}))
    return () => {
      if (!props.mark)
        return slots.default?.()
      return (
        <div
          class={classs.value}
          style={styles.value}
        >
          { slots.default?.() }
        </div>
      )
    }
  },
})
