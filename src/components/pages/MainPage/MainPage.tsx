import { FC } from 'react'
// local libs
import { Button } from '../../generic/Button'
import { MainPageContainer, ButtonContainer } from './styles'

export const MainPage: FC = () => {
  return (
    <MainPageContainer>
      <ButtonContainer>
        <Button variantColor="secondary">Налоговый вычет</Button>
      </ButtonContainer>
    </MainPageContainer>
  )
}
