import { FC } from 'react'
import { ButtonHeight, ButtonVC } from '../../../theme/enums'
// local libs
import { ButtonContainer, StyledText } from './styles'
// types
import { ButtonProps } from './types'

export const Button: FC<ButtonProps> = ({
  children,
  variantColor = ButtonVC.primary,
  variantHeight = ButtonHeight.tall,
  ...props
}) => {
  return (
    <ButtonContainer
      variantHeight={variantHeight}
      variantColor={variantColor}
      {...props}
    >
      <StyledText variantHeight={variantHeight}>{children}</StyledText>
    </ButtonContainer>
  )
}
