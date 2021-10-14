import { FC } from 'react'
import { createPortal } from 'react-dom'
// local libs
import { CloseButtonWrapper, PopupContent, PopupOverlay } from './styles'
import { ReactComponent as CrossIcon } from './assets/cross-icon.svg'
// types
import { PopupProps } from './types'

export const Popup: FC<PopupProps> = ({ isOpen, toggle }) => {
  const handleContentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => e.stopPropagation()

  const m = (
    <PopupOverlay onClick={toggle}>
      <PopupContent onClick={handleContentClick}>
        <CloseButtonWrapper onClick={toggle}>
          <CrossIcon />
        </CloseButtonWrapper>
      </PopupContent>
    </PopupOverlay>
  )

  return isOpen ? createPortal(m, document.body) : null
}
