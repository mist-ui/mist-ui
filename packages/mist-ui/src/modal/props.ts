import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
import type { ButtonProps } from '../button/props'

export interface ButtonOptions{
  text?: string
  props?: Omit<ButtonProps, 'onClick'>
}

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
  'to': {
    type: [String, Object] as PropType< string|HTMLElement>,
    default: 'body',
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
  'cancel': {
    type: Object as PropType<ButtonOptions>,
    default: undefined,
  },
  'confirm': {
    type: Object as PropType<ButtonOptions>,
    default: undefined,
  },
}

export const containerProps = {
  title: {
    type: String as PropType<string>,
    default: '',
  },
  cancel: {
    type: Object as PropType<ButtonOptions>,
    default: undefined,
  },
  confirm: {
    type: Object as PropType<ButtonOptions>,
    default: undefined,
  },
}

export type ModalProps = ExtractPropTypes<typeof modalProps>
