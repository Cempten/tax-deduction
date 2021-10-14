import styled from '@emotion/styled'
import { media } from '../../../theme/theme'
// types
import { TagContainerProps } from './types'

export const TagContainer = styled.div<TagContainerProps>`
  display: flex;
  align-items: center;
  height: 36px;
  width: auto;
  margin-right: 16px;
  padding: 0 12px;
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

  ${media.xs} {
    margin-right: 8px;
  }
`
