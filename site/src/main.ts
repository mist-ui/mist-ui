import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/index.less'
import 'mist-ui/style/index.less'
import 'mist-ui/style'
import { createApp } from 'vue'
import mist from 'mist-ui'
import App from './App.vue'
import DemoBox from './demobox/demo-box.vue'
import router from './routes/index'
import i18n from './locales/i18n'

const app = createApp(App)

// eslint-disable-next-line no-console
console.log('mist ui version:', mist.version)
app.component('DemoBox', DemoBox)
app.use(router)
app.use(mist)
app.use(i18n)
app.mount('#app')
