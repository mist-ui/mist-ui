import type { VNodeChild } from 'vue'
import { computed, defineComponent } from 'vue'
import { useMergeSlotsProps } from '../_utils/hooks/merge-slots-props'
import { classMerge } from '../_utils/tools/class-merge'
import { useInjectConfigGlobal } from '../config-provider'
import Button from '../button'
import Space from '../space'
import { containerProps } from './props'

export const Container = defineComponent({
  name: 'ModalContainer',
  inheritAttrs: false,
  props: containerProps,
  setup(props, { attrs, slots }) {
    const { getPrefixCls, getLocale } = useInjectConfigGlobal()
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

      const renderFooter = () => {
        if (slots.footer) {
          return slots.footer?.()
        }
        else {
          const dom: VNodeChild = []
          if (props.cancel !== null) {
            dom.push(
              <Button {...props.cancel?.props}>{ props.cancel?.text ?? getLocale('modal.cancel') }</Button>,
            )
          }
          if (props.confirm !== null) {
            dom.push(
              <Button type={'primary'} {...props.confirm?.props}>{ props.confirm?.text ?? getLocale('modal.confirm') }</Button>,
            )
          }
          let node: VNodeChild = dom
          if (dom.length > 1)
            node = <Space>{ dom }</Space>

          return (
            <div class={footerCls.value}>
              {node}
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
          {renderFooter()}
        </div>
      )
    }
  },
})
