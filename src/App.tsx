import React, { FC, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
// local libs
import { theme } from './theme'
import { BaseLayout } from './components/layout/BaseLayout'
import { Checkbox } from './components/generic/Checkbox'
import { Tag } from './components/generic/Tag'

export const App: FC = () => {
  const [selected, setSelected] = useState('')

  const handleTagClick = (title: string) => setSelected(title)

  const tags = ['asdw', 'asdsss', 'aasdw']
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout> asdw</BaseLayout>
      {tags.map((x) => (
        <Tag
          key={x}
          title={x}
          checked={selected === x}
          onClick={handleTagClick}
        />
      ))}
    </ThemeProvider>
  )
}
