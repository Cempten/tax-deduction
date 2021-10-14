import { FC } from 'react'
// local libs
import { StyledInput, InputContainer, StyledErrorMessage } from './styles'
// types
import { InputProps } from './types'

export const Input: FC<InputProps> = ({ errorMessage, margin, ...props }) => {
  return (
    <InputContainer margin={margin}>
      <StyledInput {...props} />
      {!!errorMessage && (
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      )}
    </InputContainer>
  )
}
