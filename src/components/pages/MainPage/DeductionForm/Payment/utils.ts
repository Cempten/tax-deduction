export const getEnding = (num: number): string => {
  const ln = num % 10

  if (num > 10 && num < 20) {
    return 'ый'
  }
  if (ln === 2 || ln === 6 || ln === 7 || ln === 8) {
    return 'ой'
  }
  if (ln === 3) {
    return 'ий'
  }

  return 'ый'
}
