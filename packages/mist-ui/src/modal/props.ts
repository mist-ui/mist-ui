import type { ExtractPropTypes, PropType } from 'vue'

export const modalProps = {
  title: {
    type: String as PropType<string>,
    default: undefined,
  },
  mask: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  visible: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  to: {
    type: [String, Object] as PropType<string | HTMLElement>,
    default: 'body',
  },
}

export type ModalProps = ExtractPropTypes<typeof modalProps>
