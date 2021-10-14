import React, { FC, useState } from 'react'
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
} from './styles'
import { Tag } from '../../../generic/Tag'
import { Button } from '../../../generic/Button'
import { useForm } from 'react-hook-form'
import { FormItems, FormData } from './types'

export const DeductionForm: FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>(tags[0])

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

    console.log(getPayments(Number(salary)))
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

      <StyledRow>
        <StyledText>Что уменьшаем?</StyledText>
        {tags.map((x) => (
          <Tag
            key={x}
            title={x}
            checked={x === selectedTag}
            onClick={handleTagClick}
            margin="0 16px 0 0"
          />
        ))}
      </StyledRow>

      <Button>Добавить</Button>
    </DeductionFormContainer>
  )
}
