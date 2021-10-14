import { FC, useState } from 'react'
// local libs
import { Button } from '../../generic/Button'
import { Popup } from '../../generic/Popup'
import { MainPageContainer, ButtonContainer } from './styles'

export const MainPage: FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)

  const togglePopup = () => setIsPopupOpen(!isPopupOpen)
  return (
    <MainPageContainer>
      <ButtonContainer>
        <Button variantColor="secondary" onClick={togglePopup}>
          Налоговый вычет
        </Button>
      </ButtonContainer>

      <Popup content={<></>} isOpen={isPopupOpen} toggle={togglePopup} />
    </MainPageContainer>
  )
}
