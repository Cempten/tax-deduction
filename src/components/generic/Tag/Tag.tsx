import { FC } from 'react'
// local libs
import { TagContainer } from './styles'
// types
import { TagProps } from './types'

export const Tag: FC<TagProps> = ({ title, checked, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const title = e.currentTarget.dataset.title
    title && onClick(title)
  }

  return (
    <TagContainer data-title={title} checked={checked} onClick={handleClick}>
      {title}
    </TagContainer>
  )
}
