import React, { FC } from 'react'
//local libs
import { BaseLayoutContainer } from './styles'

export const BaseLayout: FC = ({ children }) => {
  return <BaseLayoutContainer>{children}</BaseLayoutContainer>
}
