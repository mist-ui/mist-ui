import type { ExtractPropTypes, PropType } from 'vue'

export const treeProps = {
  test: {
    type: String as PropType<string>,
    default: '',
  },
}

export type TreeProps = ExtractPropTypes<typeof treeProps>
