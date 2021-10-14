import React, { FC } from 'react'
import { Input } from '../../../generic/Input'
// local libs
import {
  DeductionFormContainer,
  StyledHeader,
  StyledHint,
  StyledText,
} from './styles'

export const DeductionForm: FC = () => {
  return (
    <DeductionFormContainer>
      <StyledHeader>Налоговый вычет</StyledHeader>
      <StyledHint>
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет не более 13% от своего официального
        годового дохода.
      </StyledHint>

      <StyledText>Ваша зарплата в месяц</StyledText>
      <Input placeholder="Введите данные" margin="8px 0" />
    </DeductionFormContainer>
  )
}
