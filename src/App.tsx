import React, { FC } from 'react'
import { ThemeProvider } from '@emotion/react'
// local libs
import { theme } from './theme'
import { BaseLayout } from './components/layout/BaseLayout'
import { MainPage } from './components/pages/MainPage'

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout>
        <MainPage />
      </BaseLayout>
    </ThemeProvider>
  )
}
