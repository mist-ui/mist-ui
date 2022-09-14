import type { App, Plugin } from 'vue'
import Modal from './modal'

Modal.install = (app: App) => {
  app.component(Modal.name ?? 'MModal', Modal)
}

export default Modal as typeof Modal & Plugin
