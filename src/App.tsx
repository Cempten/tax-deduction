import React, { FC } from 'react'
import { ThemeProvider } from '@emotion/react'
// local libs
import { theme } from './theme'
import { BaseLayout } from './components/layout/BaseLayout'
import { Checkbox } from './components/generic/Checkbox'

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout> asdw</BaseLayout>
      <Checkbox />
    </ThemeProvider>
  )
}
