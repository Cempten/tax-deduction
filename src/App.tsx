import React, { FC } from 'react'
import { ThemeProvider } from '@emotion/react'
// local libs
import { theme } from './theme'
import { BaseLayout } from './components/layout/BaseLayout'
import { Button } from './components/generic/Button'

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout> asdw</BaseLayout>
      <Button variantColor="secondary">asdwdasd</Button>
    </ThemeProvider>
  )
}
