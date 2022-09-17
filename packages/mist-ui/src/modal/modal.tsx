import { useVModel } from '@vueuse/core'
import { Teleport, Transition, computed, defineComponent } from 'vue'
import { classMerge } from '../_utils/tools/class-merge'
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
    const onClickMask = () => {
      visible.value = false
    }

    return () => {
      return (
        <Teleport to={props.to}>
          <div class={classs.value}>
            {
              props.mask
                  && (
                    <Transition name={'fade-in'}>
                      <div
                        onClick={onClickMask}
                        v-show={visible.value}
                        class={`${prefixCls}-mask`}
                      />
                    </Transition>
                  )
            }
            {slots.default?.()}
          </div>
        </Teleport>

      )
    }
  },
})
