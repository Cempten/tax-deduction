import { FC } from 'react'
// local libs
import { CheckboxContainer, StyledCheckbox, StyledLabel } from './styles'
import { ReactComponent as CheckIcon } from './assets/check-icon.svg'
// types
import { CheckboxProps } from './types'

export const Checkbox: FC<CheckboxProps> = ({ ...props }) => {
  return (
    <StyledLabel>
      <StyledCheckbox type="checkbox" {...props} />
      <CheckboxContainer>
        <CheckIcon />
      </CheckboxContainer>
    </StyledLabel>
  )
}
