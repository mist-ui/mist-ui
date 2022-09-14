import type { ExtractPropTypes, PropType } from 'vue'

export const modalProps = {
  'visible': {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  'onUpdate:visible': {
    type: Function as PropType<(visible: boolean) => void>,
    default: undefined,
  },
  'onAfterClose': {
    type: Function as PropType<() => void>,
    default: undefined,
  },
  'getContainer': {
    type: Function as PropType<() => HTMLElement>,
    default: undefined,
  },
}

export type ModalProps = ExtractPropTypes<typeof modalProps>
