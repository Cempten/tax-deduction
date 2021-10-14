export type TagProps = {
  title: string
  onClick: (title: string) => void
} & TagContainerProps

export type TagContainerProps = {
  checked: boolean
  margin?: string
}
