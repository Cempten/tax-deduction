import React, { FC, useState } from 'react'
// local libs
import { Input } from '../../../generic/Input'
import { tags } from './utils'
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

export const DeductionForm: FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>(tags[0])

  const handleTagClick = (tagTitle: string) => setSelectedTag(tagTitle)

  return (
    <DeductionFormContainer>
      <StyledHeader>Налоговый вычет</StyledHeader>
      <StyledHint>
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет не более 13% от своего официального
        годового дохода.
      </StyledHint>

      <StyledLabel>Ваша зарплата в месяц</StyledLabel>
      <Input placeholder="Введите данные" margin="8px 0" />
      <CalculateButton>Рассчитать</CalculateButton>

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
