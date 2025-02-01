/**
 * Convert text from highlights api
 * @param text - Text to be converted
 * @returns Converted text
 */

export function highlightsTextConverter(text: string): string {
  switch (text) {
    case 'alert':
      return '* Meta longe de ser alcançada'
    case 'warning':
      return '* Falta pouco, vamos lá!'
    case 'success':
      return '* A meta do mês foi atingida! Parabéns!'
    default:
      return '* Sem dados no momento'
  }
}
