import type { ExtractPropTypes, PropType } from 'vue'
import type { BasicSize } from '../config-provider/props'

export const spaceProps = {
  size: {
    type: [String, Number] as PropType<BasicSize | number>,
    default: undefined,
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
  align: {
    type: String as PropType<'start' | 'end' | 'center' | 'baseline'>,
    default: 'center',
  },
  wrap: {
    type: Boolean,
    default: false,
  },
}

export type SpaceProps = ExtractPropTypes<typeof spaceProps>
