import { describe, expect, it } from 'vitest'

function parserStyleString(styleString: string): Record<string, any> {
  const styleObject: Record<string, any> = {}
  const styleArray = styleString.split(';')
  for (const style of styleArray) {
    if (!style)
      continue
    const styleItem = style.split(':')
    if (!styleItem[0])
      continue
    styleObject[styleItem[0]] = styleItem[1]
  }
  return styleObject
}

function styleNames(...names: any[]): undefined | Record<string, any> {
  if (names.length < 1)
    return undefined
  const styleObject: Record<string, any> = {}
  for (const name of names) {
    if (!name)
      continue

    if (typeof name === 'string') { Object.assign(styleObject, parserStyleString(name)) }
    else if (Array.isArray(name)) {
      const style = styleNames(...name)
      if (style)
        Object.assign(styleObject, style)
    }
    else if (typeof name === 'object') { Object.assign(styleObject, name) }
  }
  return styleObject
}

describe('styleNames', () => {
  it('should return undefined if styles is undefined', () => {
    expect(JSON.stringify(styleNames({ color: 'red' }, 'color:blue;width:20px;'))).toBe('{"color":"blue","width":"20px"}')
    expect(JSON.stringify(styleNames({ color: 'red' }, 'width:20px', [
      {
        color: 'blue',
      },
    ]))).toMatchInlineSnapshot('"{\\"color\\":\\"blue\\",\\"width\\":\\"20px\\"}"')
    expect(styleNames()).toBe(undefined)
  })
})
