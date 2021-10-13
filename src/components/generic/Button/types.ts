import { ButtonHeight, ButtonVC } from '../../../theme/enums'

export type ButtonProps = {
  variantColor?: keyof typeof ButtonVC
  variantHeight?: keyof typeof ButtonHeight
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonContainerProps = Required<
  Pick<ButtonProps, 'variantColor' | 'variantHeight'>
>

export type ButtonStyledTextProps = Required<Pick<ButtonProps, 'variantHeight'>>
