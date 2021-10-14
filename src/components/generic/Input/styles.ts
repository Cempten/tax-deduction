import styled from '@emotion/styled'
// types
import { InputContainerProps } from './types'

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => (margin ? margin : '0')};

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`

export const StyledInput = styled.input`
  height: 22px;
  padding: 8px 10px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-radius: 3px;
  outline: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }

  &:invalid {
    border: 1px solid ${({ theme }) => theme.colors.red};
  }
`

export const StyledErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: 10px;
  line-height: 12px;
  margin: 4px 0 0;
`
