import { highlightsTextConverter } from '@/utils'

describe('highlightsTextConverter', () => {
  it('shoud return the correctly text for "alert"', () => {
    expect(highlightsTextConverter('alert')).toBe(
      '* Meta longe de ser alcançada'
    )
  })

  it('shoud return the correctly text for "warning"', () => {
    expect(highlightsTextConverter('warning')).toBe('* Falta pouco, vamos lá!')
  })

  it('shoud return the correctly text for "success"', () => {
    expect(highlightsTextConverter('success')).toBe(
      '* A meta do mês foi atingida! Parabéns!'
    )
  })

  it('shoud return the correctly text for unknown input', () => {
    expect(highlightsTextConverter('un')).toBe('* Sem dados no momento')
  })
})
