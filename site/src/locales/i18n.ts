import { createI18n } from 'vue-i18n'
import { usePreferredLanguages } from '@vueuse/core'
import { enUS, zhCN } from './index'
const lang = usePreferredLanguages()
const i18n = createI18n({
  locale: lang.value ? lang.value[0] : 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  },
  legacy: false,
})

export default i18n
