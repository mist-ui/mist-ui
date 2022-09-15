import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import { useMergeSlotsProps } from '../_utils/hooks/merge-slots-props'
import { classMerge } from '../_utils/tools/class-merge'
import { useInjectConfigGlobal } from '../config-provider'

export const Container = defineComponent({
  name: 'ModalContainer',
  inheritAttrs: false,
  props: {
    title: {
      type: String as PropType<string>,
      default: '',
    },
  },
  setup(props, { attrs, slots }) {
    const { getPrefixCls } = useInjectConfigGlobal()
    const modalPrefix = getPrefixCls('modal')
    const contentCls = computed(() => classMerge(attrs.class, {
      [`${modalPrefix}-container`]: true,
    }))
    const headerCls = computed(() => classMerge({
      [`${modalPrefix}-header`]: true,
    }))
    const bodyCls = computed(() => classMerge({
      [`${modalPrefix}-body`]: true,
    }))
    const footerCls = computed(() => classMerge({
      [`${modalPrefix}-footer`]: true,
    }))
    return () => {
      const renderHeader = () => {
        if (slots.header) {
          return slots.header?.()
        }
        else {
          const title = useMergeSlotsProps(props, slots, 'title')
          return (
            <div class={headerCls.value}>
              <div class={`${modalPrefix}-title`}>{ title?.() }</div>
            </div>
          )
        }
      }
      return (
        <div
          role={'modal'}
          aria-modal={true}
          class={contentCls.value}
        >
          { renderHeader() }
          <div class={bodyCls.value}>
            {slots.default?.()}
          </div>
          <div class={footerCls.value}>
            {slots.footer?.()}
          </div>
        </div>
      )
    }
  },
})
