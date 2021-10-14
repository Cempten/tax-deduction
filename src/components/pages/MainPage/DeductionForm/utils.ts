export const tags = ['Платёж', 'Срок']

export const getPayments = (salary: number): Array<number> => {
  const maxDeduction = 260_000
  const annualTax = salary * 12 * 0.13
  const remainder = maxDeduction % annualTax

  const numberOfFullPayment = Math.floor(maxDeduction / annualTax)
  const numberOfPayment = numberOfFullPayment + 1

  const payments = Array.from({ length: numberOfPayment }, (x, i) =>
    i !== numberOfPayment - 1 ? annualTax : remainder,
  )

  return payments
}
