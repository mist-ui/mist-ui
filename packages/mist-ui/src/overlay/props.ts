import type { ExtractPropTypes, PropType } from 'vue'

export const overlayProps = {
  mark: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  zIndex: {
    type: Number as PropType<number>,
    default: 1000,
  },
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
