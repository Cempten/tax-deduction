import { FC } from 'react'
// local libs
import { StyledInput, InputContainer, StyledErrorMessage } from './styles'
// types
import { InputProps } from './types'

export const Input: FC<InputProps> = ({
  register,
  name,
  errorMessage,
  margin,
  ...props
}) => {
  return (
    <InputContainer margin={margin}>
      <StyledInput {...register(name)} {...props} />
      {!!errorMessage && (
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      )}
    </InputContainer>
  )
}
