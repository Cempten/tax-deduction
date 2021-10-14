import styled from '@emotion/styled'
import { media } from '../../../theme/theme'

export const MainPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const ButtonContainer = styled.div`
  width: 198px;

  ${media.xs} {
    width: 149px;
  }
`
