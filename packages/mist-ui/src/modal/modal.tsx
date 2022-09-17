import { useVModel } from '@vueuse/core'
import { Teleport, Transition, computed, defineComponent, shallowRef, watchEffect } from 'vue'
import { isNumber } from '../_utils/tools/base'
import { classMerge } from '../_utils/tools/class-merge'
import { styleMerge } from '../_utils/tools/style-merge'
import { useInjectConfigGlobal } from '../config-provider'
import { modalProps } from './props'
export default defineComponent({
  name: 'MModal',
  props: {
    ...modalProps,
  },
  emits: ['update:visible'],
  setup(props, { slots, emit }) {
    const { getPrefixCls } = useInjectConfigGlobal()
    const prefixCls = getPrefixCls('modal')
    const visible = useVModel(props, 'visible', emit)
    const classs = computed(() => classMerge(prefixCls, {}))
    const closed = shallowRef(false)
    const onClickMask = () => {
      visible.value = false
    }
    watchEffect(() => {
      closed.value = visible.value
    })
    const containerCls = computed(() => classMerge(`${prefixCls}-container`, {}))
    const containerStyle = computed(() => {
      const width = isNumber(props.width) ? `${props.width}px` : props.width
      return styleMerge({
        width: width?.endsWith('px') ? width : `${width}px`,
      })
    })
    const onAfterLeave = () => {
      // TODO
      closed.value = false
    }

    return () => {
      if (!closed.value) return null
      return (
        <Teleport to={props.to}>
          <div class={classs.value}>
            {
              props.mask
                  && (
                    <Transition duration={3000} name={'fade-in'}>
                      <div
                        onClick={onClickMask}
                        v-show={visible.value}
                        class={`${prefixCls}-mask`}
                      />
                    </Transition>
                  )
            }
            <Transition name={'modal-fade-in'} duration={3000} onAfterLeave={onAfterLeave}>
              <div class={containerCls.value} style={containerStyle.value} v-show={visible.value}>
                <div class={`${prefixCls}-header`}>
                  {
                    slots.header?.()
                      || <div class={`${prefixCls}-title`}>{ slots.title?.() || props?.title}</div>
                  }
                </div>
                <div class={`${prefixCls}-body`}>
                  {slots.default?.()}
                </div>
                <div class={`${prefixCls}-footer`}>
                  {slots.footer?.() || <div> footer </div>}
                </div>
              </div>
            </Transition>
          </div>
        </Teleport>
      )
    }
  },
})
