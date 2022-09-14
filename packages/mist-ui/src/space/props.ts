import type { ExtractPropTypes, PropType } from 'vue'

export const spaceProps = {
  test: {
    type: String as PropType<string>,
    default: '',
  },
}

export type SpaceProps = ExtractPropTypes<typeof spaceProps>
