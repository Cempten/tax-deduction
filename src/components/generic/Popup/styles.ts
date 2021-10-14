import styled from '@emotion/styled'

export const PopupOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0e1c2875;
  z-index: 1;
`

export const PopupContent = styled.div`
  position: relative;
  font-family: Lab Grotesque;
`

export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 27px;
  right: 27px;
  cursor: pointer;
`
