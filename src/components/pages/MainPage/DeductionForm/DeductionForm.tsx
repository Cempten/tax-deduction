import React, { FC, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
// local libs
import { Input } from '../../../generic/Input'
import { getPayments, tags } from './utils'
import {
  CalculateButton,
  DeductionFormContainer,
  StyledHeader,
  StyledHint,
  StyledRow,
  StyledLabel,
  StyledText,
  PaymentsContainer,
  SubStyledRow,
  ButtonContainer,
} from './styles'
import { Tag } from '../../../generic/Tag'
import { Button } from '../../../generic/Button'
import { useForm } from 'react-hook-form'
import { FormItems, FormData } from './types'
import { Payment } from './Payment'

export const DeductionForm: FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>(tags[0])
  const [paymentArr, setPaymentArr] = useState<Array<number> | null>(null)

  const {
    register,
    getValues,
    formState: { errors },
    setError,
  } = useForm<FormData>()

  const handleTagClick = (tagTitle: string) => setSelectedTag(tagTitle)

  const calculateDeduction = () => {
    const salary: string | undefined = getValues(FormItems.salaryInput)

    if (!salary) {
      setError(FormItems.salaryInput, {
        message: 'Поле обязательно для заполнения',
      })
      return
    }
    setError(FormItems.salaryInput, {})

    const payments = getPayments(Number(salary))
    setPaymentArr(payments)
  }

  return (
    <DeductionFormContainer>
      <StyledHeader>Налоговый вычет</StyledHeader>
      <StyledHint>
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет не более 13% от своего официального
        годового дохода.
      </StyledHint>

      <StyledLabel>Ваша зарплата в месяц</StyledLabel>
      <Input
        type="number"
        placeholder="Введите данные"
        margin="8px 0"
        name={FormItems.salaryInput}
        register={register}
        errorMessage={errors[FormItems.salaryInput]?.message}
      />
      <CalculateButton onClick={calculateDeduction}>Рассчитать</CalculateButton>

      {!!paymentArr && (
        <PaymentsContainer>
          <StyledLabel>Итого можете внести в качестве досрочных:</StyledLabel>
          <Scrollbars autoHeight autoHeightMax={228}>
            {paymentArr.map((x, i) => (
              <Payment key={i} sum={x} index={i + 1} />
            ))}
          </Scrollbars>
        </PaymentsContainer>
      )}

      <StyledRow>
        <StyledText>Что уменьшаем?</StyledText>
        <SubStyledRow>
          {tags.map((x) => (
            <Tag
              key={x}
              title={x}
              checked={x === selectedTag}
              onClick={handleTagClick}
            />
          ))}
        </SubStyledRow>
      </StyledRow>

      <ButtonContainer>
        <Button>Добавить</Button>
      </ButtonContainer>
    </DeductionFormContainer>
  )
}
