import { pxToRem } from '@/utils'

describe('pxToRem', () => {
  it('shoud correctly convert pixels to rem for positive values', () => {
    expect(pxToRem(16)).toBe('1rem')
    expect(pxToRem(32)).toBe('2rem')
    expect(pxToRem(8)).toBe('0.5rem')
  })

  it('shoud correctly convert to zero', () => {
    expect(pxToRem(0)).toBe('0rem')
  })

  it('shoud correctly convert pixels for negative values', () => {
    expect(pxToRem(-16)).toBe('-1rem')
    expect(pxToRem(-32)).toBe('-2rem')
    expect(pxToRem(-8)).toBe('-0.5rem')
  })
})
