import { fileURLToPath } from 'url'
import { resolve } from 'path'
import { outputFile } from 'fs-extra'
import { camelCase, upperFirst } from '@mistjs/lodash'
import { ESLint } from 'eslint'
import fg from 'fast-glob'
const dtsFile = 'components.d.ts'
const mistPath = fileURLToPath(new URL('../packages/mist-ui/src', import.meta.url))
const dir = fileURLToPath(new URL('../', import.meta.url))
const lint = new ESLint({
  overrideConfigFile: resolve(dir, '.eslintrc'),
  cwd: dir,
  fix: true,
})
export const generateTypes = async() => {
  const comps = await fg(['**/*.vue', '!**/demos'], {
    cwd: mistPath,
  })

  const types: string[] = []
  for (const comp of comps) {
    // 生成类型support
    const compPath = `../src/${comp}`
    const compPathArr = comp.replace(/\.vue$/, '')
      .split('/')
    const compName = upperFirst(camelCase(compPathArr[compPathArr.length - 1]))
    const type = `M${compName}: typeof import('${compPath}')['default']`
    types.push(type)
  }
  // 生成类型文件
  let dts = `import '@vue/runtime-core'
  declare module '@vue/runtime-core' {
  export interface GlobalComponents {
      ${types.join('\n')}
  }
}`
  const res = await lint.lintText(dts)
  dts = res[0].output ?? dts
  const outDir = resolve(mistPath, '../typings', dtsFile)
  await outputFile(outDir, dts, {
    encoding: 'utf8',
  })
  console.log(`生成类型文件成功：${outDir}`)
}

generateTypes().then(() => {
  // success
})
