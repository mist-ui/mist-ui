import type { App, Plugin } from 'vue'
import Tree from './tree.vue'

Tree.install = (app: App) => {
  app.component(Tree.name ?? 'MTree', Tree)
}

export default Tree as typeof Tree & Plugin
