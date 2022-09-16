import { Teleport, Transition, computed, defineComponent, shallowRef, watch, withModifiers } from 'vue'
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

    const closed = shallowRef(props.visible)
    watch(() => props.visible, (val) => {
      if (val)
        closed.value = val
    })

    const styles = computed(() => styleMerge(attrs.style, {
      width: props.width && String(props.width).endsWith('px') ? props.width : `${props.width}px`,
    }))

    const onMaskClick = () => {
      props?.['onUpdate:visible']?.(false)
    }

    const onCancel = () => {
      const bool = props?.onCancel?.()
      if (bool !== false)
        props?.['onUpdate:visible']?.(false)
    }

    const onConfirm = () => {
      const bool = props?.onConfirm?.()
      if (bool !== false)
        props?.['onUpdate:visible']?.(false)
    }
    const onEnter = (_el: Element, _done: () => void) => {
      // done()
    }

    const onLeave = (_el: Element, _done: () => void) => {
      setTimeout(() => {
        closed.value = false
      }, 300)
      // done()
    }

    const onAfterLeave = (_el: Element) => {
      closed.value = false
    }

    return () => {
      const renderContainer = () => {
        if (props.destroyOnClose) {
          if (props.visible) {
            return (
              <Container
                onCancel={onCancel}
                onConfirm={onConfirm}
                v-slots={slots}
                title={props.title}/>
            )
          }
          else {
            return null
          }
        }
        else {
          return (
            <Container
              v-show={props.visible}
              onCancel={onCancel}
              onConfirm={onConfirm}
              v-slots={slots}
              title={props.title}/>
          )
        }
      }

      return (
        <Teleport to={props.to}>
          <Overlay
            mark={props.visible}
            class={props.overlayClass}
            style={props.overlayStyle}
            v-show={closed.value}
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
                <Transition
                  name={'modal-fade-in'}
                  onEnter={onEnter}
                  onLeave={onLeave}
                  onAfterLeave={onAfterLeave}
                >
                  {renderContainer()}
                </Transition>
              </div>
            </div>
          </Overlay>
        </Teleport>
      )
    }
  },
})
