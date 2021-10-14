import { FieldValues, UseFormRegister } from 'react-hook-form'

export type InputProps = {
  errorMessage?: string
  name: string
  register: UseFormRegister<FieldValues>
} & React.InputHTMLAttributes<HTMLInputElement> &
  InputContainerProps

export type InputContainerProps = {
  margin?: string
}
