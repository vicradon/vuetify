import { kebabCase } from '..'

describe('kebabCase', () => {
  it('should convert string to kebab case', () => {
    expect(kebabCase('PascalCase')).toBe('pascal-case')
    expect(kebabCase('camelCase')).toBe('camel-case')
    expect(kebabCase('kebab-case')).toBe('kebab-case')
    expect(kebabCase('ALLCAPS')).toBe('allcaps')
    expect(kebabCase('this is a sentence')).toBe('this-is-a-sentence')
    expect(kebabCase('WhatIsThis')).toBe('what-is-this')
  })

  it('should handle null values', () => {
    expect(kebabCase(null as any)).toBe('')
    expect(kebabCase(undefined as any)).toBe('')
  })
})
