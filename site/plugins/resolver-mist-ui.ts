import { basename, resolve } from 'path'
import { fileURLToPath } from 'url'
import type { PluginOption, ResolvedConfig } from 'vite'
import { watch } from 'chokidar'
import { normalizePath } from 'vite'
import { outputFile } from 'fs-extra'
const dts = 'mist-ui.d.ts'

const _dirname = fileURLToPath(new URL('..', import.meta.url))

const types = normalizePath(resolve(_dirname, 'types', dts))

const generateDts = (tsMap: Map<string, string>) => {
  const imports: string[] = []
  for (const [key, value] of tsMap)
    imports.push(`M${value}: typeof import('./../${key}')['default']`)
  const code = `import '@vue/runtime-core'

export {}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ${imports.join('\n    ')}
  }
}
`
  outputFile(types, code)
}

function camelCase(str: string) {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
}
const watchMistUI = (config: ResolvedConfig, tsMap: Map<string, string>) => {
  const watcher = watch('./../packages/mist-ui/src/**/*.tsx', {
    cwd: config.root,
  })
  watcher.on('add', (file) => {
    if (!tsMap.has(file)) {
      const name = camelCase(basename(file, '.tsx'))
      const importName = name.charAt(0).toUpperCase() + name.slice(1)
      tsMap.set(file, importName)
      generateDts(tsMap)
    }
  })

  watcher.on('unlink', (file) => {
    if (tsMap.has(file)) {
      // 删除
      generateDts(tsMap)
    }
  })
}

export const resolveMistUI = (): PluginOption => {
  let config: ResolvedConfig | undefined
  const tsMap = new Map<string, string>()
  return {
    name: 'mist-ui:resolver',
    configResolved(_config) {
      config = _config
      watchMistUI(config, tsMap)
    },
  }
}
