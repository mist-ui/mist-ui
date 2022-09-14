import { LoadingOutlined } from '@mist-design/icons'
import classNames from 'classnames'
import { computed, defineComponent } from 'vue'
import { useInjectConfigGlobal } from '../config-provider'
import { buttonProps } from './props'

export default defineComponent({
  name: 'MButton',
  props: buttonProps,
  setup(props, { slots }) {
    const { getPrefixCls } = useInjectConfigGlobal()
    const btnPrefix = getPrefixCls('btn')
    const classs = computed(() => classNames(
      btnPrefix,
      {
        [`${btnPrefix}-${props.type}`]: props.type !== 'default',
        [`${btnPrefix}-link`]: props.link,
        [`${btnPrefix}-${props.size}`]: props.size && props.size !== 'default',
        [`${btnPrefix}-block`]: props.block,
        [`${btnPrefix}-dashed`]: props.dashed,
        [`${btnPrefix}-round`]: props.round,
        [`${btnPrefix}-circle`]: props.cricle,
        [`${btnPrefix}-loading`]: props.loading,
      },
    ))
    const loadingClasss = computed(() => classNames(
      {
        [`${btnPrefix}-loading-icon`]: true,
      },
    ))
    const isDisabled = computed(() => props.disabled || props.loading)

    return () => {
      return (
        <button
          class={classs.value}
          disabled={isDisabled.value}
          type={props.nativeType}
          onClick={props.onClick}>
          {!props.loading && slots.icon?.()}
          {props.loading && <span class={loadingClasss.value}>
            <LoadingOutlined />
          </span>}
          {slots.default?.()}
        </button>
      )
    }
  },
})
