import styled from '@emotion/styled'
// types
import { ButtonContainerProps, ButtonStyledTextProps } from './types'

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme, variantHeight }) => theme.button.height[variantHeight]};
  width: 100%;
  border-radius: 6px;
  background: ${({ theme }) => theme.gradients[0]};
  border: ${({ theme, variantColor }) => theme.button.border[variantColor]};
  cursor: pointer;

  &:hover {
    background: ${({ theme, variantColor }) =>
      theme.button.hoveredColor[variantColor]};
    p {
      color: ${({ theme, variantColor }) =>
        theme.button.hoveredTextColor[variantColor]};
    }
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`

export const StyledText = styled.p<ButtonStyledTextProps>`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme, variantHeight }) =>
    theme.button.fontSize[variantHeight]};
`
