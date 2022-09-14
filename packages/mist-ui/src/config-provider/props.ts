import type { ExtractPropTypes, PropType } from 'vue'
import type { Locale } from '../locales'
import { zhCN } from '../locales'
export type BasicSize = 'default'|'large'|'small'
export const configProviderProps = {
  prefixCls: {
    type: String as PropType<string>,
    default: 'mist',
  },
  htmlSelector: {
    type: String as PropType<string>,
    default: 'html',
  },
  htmlSelectorDark: {
    type: String as PropType<string>,
    default: 'html.dark',
  },
  locale: {
    type: Object as PropType<Locale>,
    default: zhCN,
  },
}

export type ConfigProviderProps = Partial<ExtractPropTypes<typeof configProviderProps>>
