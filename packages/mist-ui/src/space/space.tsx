import type { CSSProperties } from 'vue'
import { computed, defineComponent } from 'vue'
import classNames from 'classnames'
import { useInjectConfigGlobal } from '../config-provider'
import { spaceProps } from './props'

export default defineComponent({
  name: 'MSpace',
  props: spaceProps,
  setup(props, { slots }) {
    const { getPrefixCls } = useInjectConfigGlobal()
    const spacePrefix = getPrefixCls('space')

    const classs = computed(() => classNames(spacePrefix,
      {
        [`${spacePrefix}-${props.direction}`]: !!props.direction,
        [`${spacePrefix}-wrap`]: props.wrap,
        [`${spacePrefix}-align-${props.align}`]: !!props.align,
      },
    ))

    const size = computed(() => {
      const { size } = props
      if (typeof size === 'number')
        return `${size}px`

      switch (size) {
        case 'small':
          return '4px'
        case 'large':
          return '16px'
        default:
          return '8px'
      }
    })

    const style = computed<CSSProperties>(() => {
      return {
        gap: size.value,
      }
    })

    return () => {
      return <div style={style.value} class={classs.value}>{slots.default?.()}</div>
    }
  },
})
