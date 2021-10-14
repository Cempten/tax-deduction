export type InputProps = {
  errorMessage?: string
} & React.InputHTMLAttributes<HTMLInputElement> &
  InputContainerProps

export type InputContainerProps = {
  margin?: string
}
