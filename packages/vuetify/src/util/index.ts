export function kebabCase (str: string): string {
  return (str || '').replace(/\s([a-z])/gi, '-$1').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
