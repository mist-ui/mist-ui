import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'

export const modalProps = {
  'visible': {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  'title': {
    type: String as PropType<string>,
    default: undefined,
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
  'width': {
    type: [String, Number] as PropType<string | number>,
    default: 520,
  },
  'overlayStyle': {
    type: [String, Object] as PropType<string | CSSProperties>,
    default: undefined,
  },
  'overlayClass': {
    type: [String, Object] as PropType<string | Record<string, any>>,
    default: undefined,
  },
}

export type ModalProps = ExtractPropTypes<typeof modalProps>
