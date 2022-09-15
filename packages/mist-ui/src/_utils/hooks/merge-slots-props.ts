import { isFunction } from '../tools/base'

export const useMergeSlotsProps = (props: Record<string, any>, slots: Record<string, any>, key: string): any => {
  if (slots[key])
    return slots[key]
  if (props[key]) {
    if (isFunction(props[key]))
      return props[key]
    return () => props[key]
  }
  return null
}
