import { Teleport, computed, defineComponent, withModifiers } from 'vue'
import { classMerge } from '../_utils/tools/class-merge'
import { styleMerge } from '../_utils/tools/style-merge'
import { useInjectConfigGlobal } from '../config-provider'
import Overlay from '../overlay'
import { Container } from './container'
import { modalProps } from './props'
export default defineComponent({
  name: 'MModal',
  props: {
    ...modalProps,
  },
  setup(props, { attrs, slots }) {
    const { getPrefixCls } = useInjectConfigGlobal()
    const modalPrefix = getPrefixCls('modal')
    const overlayCls = computed(() => classMerge({
      [`${modalPrefix}-overlay`]: true,
    }))

    const classs = computed(() => classMerge(modalPrefix, {}))

    const styles = computed(() => styleMerge(attrs.style, {
      width: props.width && String(props.width).endsWith('px') ? props.width : `${props.width}px`,
    }))

    const overlayStyle = computed(() => styleMerge(props.overlayStyle, {
      display: props.visible ? 'block' : 'none',
    }))

    const onMaskClick = () => {
      props?.['onUpdate:visible']?.(false)
    }

    return () => {
      return (
        <Teleport to={props.to}>
          <Overlay
            mark={props.visible}
            class={props.overlayClass}
            style={overlayStyle.value}
          >
            <div
              class={overlayCls.value}
              onClick={withModifiers(onMaskClick, ['stop'])}
            >
              <div
                class={classs.value}
                style={styles.value}
                onClick={withModifiers(() => {}, ['stop'])}
              >
                <Container v-slots={slots} title={props.title}/>
              </div>
            </div>
          </Overlay>
        </Teleport>
      )
    }
  },
})
