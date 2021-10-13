import React, { FC } from 'react'
import { ThemeProvider } from '@emotion/react'
// local libs
import { theme } from './theme'
import { BaseLayout } from './components/layout/BaseLayout'

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout> asdw</BaseLayout>
    </ThemeProvider>
  )
}
