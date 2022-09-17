export const isObject = (val: any): val is Record<any, any> => {
  return val !== null && Object.prototype.toString.call(val) === '[object Object]'
}

export const isString = (val: any): val is string => {
  return typeof val === 'string'
}

export const isArray = (val: any): val is Array<any> => {
  return Array.isArray(val)
}

export const isFunction = (val: any): val is Function => {
  return typeof val === 'function'
}

export const isNumber = (val: any): val is number => {
  return typeof val === 'number' && !isNaN(val)
}
