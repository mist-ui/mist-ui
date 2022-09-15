import { computed, defineComponent } from 'vue'
import { classMerge } from '../_utils/tools/class-merge'
import { useInjectConfigGlobal } from '../config-provider'
import { styleMerge } from '../_utils/tools/style-merge'
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
      overlayPrefix,
      {
        [`${overlayPrefix}-show`]: props.mark,
      },
      attrs.class,
    ))
    const styles = computed(() => styleMerge(attrs.style, {}))
    return () => {
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
