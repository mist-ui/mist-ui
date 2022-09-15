import '@vue/runtime-core'

export {}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    MButton: typeof import('./../../packages/mist-ui/src/button/button.tsx')['default']
    MConfigProvider: typeof import('./../../packages/mist-ui/src/config-provider/config-provider.tsx')['default']
    MModal: typeof import('./../../packages/mist-ui/src/modal/modal.tsx')['default']
    MSpace: typeof import('./../../packages/mist-ui/src/space/space.tsx')['default']
    MOverlay: typeof import('./../../packages/mist-ui/src/overlay/overlay.tsx')['default']
  }
}
