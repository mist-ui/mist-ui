import type { App, Plugin } from 'vue'
import Button from './button'

Button.install = (app: App) => {
  app.component(Button.name ?? 'MButton', Button)
}

export default Button as typeof Button & Plugin
