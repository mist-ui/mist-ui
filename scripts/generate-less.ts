import { resolve } from 'path'
import { cyan, generate, gold, green, red } from '@ant-design/colors'
import { outputFile } from 'fs-extra'
const resolve1 = (path: string) => resolve(__dirname, path)

const generateLess = (colors: string[], name: string, isDark = false) => {
  if (isDark)
    name = `${name}-dark`
  const less = colors.map((color, index) => {
    return `@${name}-${index + 1}: ${color};`
  })
  less.unshift(`\n\n@${name}-base: ${colors[5]};`)
  return less
}

const generateVars = (colors: string[], name: string, isDark = false) => {
  if (isDark)
    name = `${name}-dark`
  const less = colors.map((color, index) => {
    return `--@{prefix-cls}-${name}-${index + 1}: @${name}-${index + 1};`
  })
  less.unshift(`\n\n--@{prefix-cls}-${name}-base: @${name}-base;`)
  return less
}

const primary = generateLess([...cyan.values()], 'primary')
const varPrimary = generateVars([...cyan.values()], 'primary')
const success = generateLess([...green.values()], 'success')
const varSuccess = generateVars([...green.values()], 'success')
const warning = generateLess([...gold.values()], 'warning')
const varWarning = generateVars([...gold.values()], 'warning')
const error = generateLess([...red.values()], 'error')
const varError = generateVars([...red.values()], 'error')

const styles = [...primary, ...success, ...warning, ...error].join('\n')
const varStyles = [...varPrimary, ...varSuccess, ...varWarning, ...varError].join('\n')
outputFile(resolve1('color.less'), styles.trim())
outputFile(resolve1('vars.less'), varStyles.trim())

const bgColor = '#141414'

const darkP = generate(cyan.primary as string, { theme: 'dark', backgroundColor: bgColor })
const primaryDark = generateLess([...darkP.values()], 'primary', true)
const varPrimaryDark = generateVars([...darkP.values()], 'primary', true)
const darkS = generate(green.primary as string, { theme: 'dark', backgroundColor: bgColor })
const successDark = generateLess([...darkS.values()], 'success', true)
const varSuccessDark = generateVars([...darkS.values()], 'success', true)
const darkW = generate(gold.primary as string, { theme: 'dark', backgroundColor: bgColor })
const warningDark = generateLess([...darkW.values()], 'warning', true)
const varWarningDark = generateVars([...darkW.values()], 'warning', true)
const darkE = generate(red.primary as string, { theme: 'dark', backgroundColor: bgColor })
const errorDark = generateLess([...darkE.values()], 'error', true)
const varErrorDark = generateVars([...darkE.values()], 'error', true)

const stylesDark = [...primaryDark, ...successDark, ...warningDark, ...errorDark].join('\n')
const varStylesDark = [...varPrimaryDark, ...varSuccessDark, ...varWarningDark, ...varErrorDark].join('\n')
outputFile(resolve1('color-dark.less'), stylesDark.trim())
outputFile(resolve1('vars-dark.less'), varStylesDark.trim())
