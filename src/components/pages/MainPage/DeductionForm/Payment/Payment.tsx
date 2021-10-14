import { FC } from 'react'
// local libs
import { Checkbox } from '../../../../generic/Checkbox'
import { PaymentContainer, StyledSum, StyledIndex } from './styles'
// types
import { PaymentProps } from './types'
import { getEnding } from './utils'

export const Payment: FC<PaymentProps> = ({ sum, index }) => {
  const ending = getEnding(index)

  return (
    <PaymentContainer>
      <Checkbox />
      <StyledSum>{`${sum} рублей`}</StyledSum>
      <StyledIndex>{`в ${index}-${ending} год`}</StyledIndex>
    </PaymentContainer>
  )
}
