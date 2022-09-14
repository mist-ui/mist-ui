import type { App, Plugin } from 'vue'
import Overlay from './overlay'

Overlay.install = (app: App) => {
  app.component(Overlay.name ?? 'MOverlay', Overlay)
}

export default Overlay as typeof Overlay & Plugin
