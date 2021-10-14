import styled from '@emotion/styled'
// types
import { TagContainerProps } from './types'

export const TagContainer = styled.div<TagContainerProps>`
  display: flex;
  align-items: center;
  height: 36px;
  width: auto;
  padding: 0 12px;
  margin: ${({ margin }) => (margin ? margin : '0')};
  border-radius: 50px;
  cursor: pointer;
  color: ${({ theme, checked }) =>
    checked ? theme.colors.white : theme.colors.black};
  background: ${({ theme, checked }) =>
    checked ? theme.gradients[0] : theme.colors.gray2};

  &:hover {
    background: ${({ theme, checked }) =>
      checked ? theme.gradients[0] : theme.colors.gray3};
  }
`
