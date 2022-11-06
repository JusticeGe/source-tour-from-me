export function isArray(val: any) {
  return Array.isArray(val)
}

export function isOn(val: string) {
  return val[0] === 'o' && val[1] === 'n'
}
