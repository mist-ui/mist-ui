import '@vue/runtime-core'

export {}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    MSpace: typeof import('./../../packages/mist-ui/src/space/space.tsx')['default']
    MConfigProvider: typeof import('./../../packages/mist-ui/src/config-provider/config-provider.tsx')['default']
    MButton: typeof import('./../../packages/mist-ui/src/button/button.tsx')['default']
  }
}
