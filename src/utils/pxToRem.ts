/**
 * Convert pixels to rem
 * @param pixels - Pixels value to be converted
 * @returns The convert rem value
 */

export function pxToRem(pixels: number): string {
  return `${pixels / 16}rem`
}
