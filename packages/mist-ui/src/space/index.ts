import type { App, Plugin } from 'vue'
import Space from './space'

Space.install = (app: App) => {
  app.component(Space.name ?? 'MSpace', Space)
}

export default Space as typeof Space & Plugin
