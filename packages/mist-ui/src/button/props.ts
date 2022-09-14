import type { ExtractPropTypes, PropType } from 'vue'
import type { BasicSize } from '../config-provider/props'

type ButtonType = 'default'|'primary'|'success'|'warning'|'error'

type ButtonSize = BasicSize

type NativeButtonType = 'button'|'submit'|'reset'

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'default',
  },
  nativeType: {
    type: String as PropType<NativeButtonType>,
    default: 'button',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: undefined,
  },
  link: {
    type: Boolean as PropType<boolean>,
    default: undefined,
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: undefined,
  },
  dashed: {
    type: Boolean as PropType<boolean>,
    default: undefined,
  },
  block: {
    type: Boolean as PropType<boolean>,
    default: undefined,
  },
  round: {
    type: Boolean as PropType<boolean>,
    default: undefined,
  },
  cricle: {
    type: Boolean as PropType<boolean>,
    default: undefined,
  },
  loading: {
    type: Boolean as PropType<boolean>,
    default: undefined,
  },
  // events
  onClick: {
    type: Function as PropType<(e: Event) => void>,
    default: () => {},
  },
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
