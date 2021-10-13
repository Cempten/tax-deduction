import React, { FC } from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import styled from '@emotion/styled'

const Block = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ theme }) => theme.gradients[0]};
`

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Block />
    </ThemeProvider>
  )
}
